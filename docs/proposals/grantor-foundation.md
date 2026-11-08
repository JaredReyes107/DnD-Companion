## 0. How to work (read first)

- **Work in atomic, reviewable commits.** Each commit does one thing, leaves the build green (`npx tsc --noEmit`, `npm run lint`, `npm test`), and leaves the golden test (commit 1) green unless the commit says otherwise.
- **Never implement more than one numbered commit per response.** At the end of each step, stop and report:
  1. what changed,
  2. which tests prove it,
  3. what the next commit will touch.
- **If a commit would exceed roughly 400 changed lines of hand-written code, split it.** Generated or codemod output doesn't count, but the codemod script itself does, and it ships in its own commit ahead of its output.
- **Mechanical changes and behavioral changes never share a commit.** Renames, moves and codemod output go in separate commits from logic changes.
- **Do not guess.** If something in section 7 is unresolved, or you hit something the brief doesn't cover, ask before writing code. If you can answer a question by reading the repo (a grep, a type), do that and say what you found.
- **Follow the repo conventions** in `AGENTS.md` and `docs/contributing.md`: conventional commits, arrow-function components, `@/` alias, 2-space indent, double quotes, semicolons, no unused imports, `core/` never imports from `app/` or `components/`.
- **Don't edit `rules.generated.ts` by hand.** Don't touch UI except where a commit says so.

## 1. Product context

An offline-first D&D 5E companion for bookkeeping, not a VTT or a rules simulator. Players roll physical dice. The app tracks state and projects derived values. Homebrew is a first-class goal, so most content should eventually be editable data.

Three pillars: **Actions** (what you can do), **Resources** (how much), and **Modifiers/Stats** (what changes and why). **Features, feats, races, items and spells all exist to grant one or more of these.** Features are not the goal. They are a grouping and a description of what isn't modeled.

Architectural stance: a deterministic state-transformation engine, not a semantic interpreter. Store base state, apply effects and overrides, project derived values. No `if (featureId === "bladesong")`. Derived values are never stored.

## 2. Problem statement

Today:

- Features are acquired **only** through class and subclass progression (`featuresByLevel`, embedded in each class file).
- Real sources also include race/subrace, feats (which are themselves granted by class progression, race, items or DM gift), items, and homebrew "you trained and gained X".
- "Why do I have this?" is answered four different ways, all weak:

| Mechanism | Weakness |
|---|---|
| `FeatureTemplate.source` | Mixes classification with provenance |
| `FeatureInstance.sourceId` | Free-form and effectively unused |
| `ResourceGrantor` / `FeatureObtention` | Hand-written back-pointers on the granted thing. They duplicate `grants` and drift (`divine_fury`, `fanatical_focus` and `embodiment_of_the_law` have none) |
| `sourceId` on actions, modifiers and statuses | Untyped and already inconsistent (`storm` vs `storm_sorcery`, `guardian` on armorer actions) |

Goal of this refactor: build the foundation so a *later, separate* PR can implement "trailing" (hyperlink-style provenance in the sheet and a search/DB screen). This PR does **not** build trailing UI or the reverse index.

## 3. Vocabulary (use these terms precisely)

- **Grantor**: a *role*, not a type. Anything that can be the source end of a grant. Candidates: class slot, subclass, feature, option, acquisition, later race, item and background.
- **Feature**: one kind of grantor. A named, player-facing, searchable unit of content. Class, race and item are grantors but not features.
- **Grant**: an edge `grantor → thing` (resource, action, modifier, choice, proficiency, language, advantage, override, and new: feature).
- **Acquisition**: a *stored* root on the character, meaning "this character has grantor X for reason Y".
- **Trail / provenance**: the derived path from a root to a grant. Computed, never stored.

## 4. Design

### 4.1 Core idea

1. `grants` is the **single source of truth** for what-gives-what.
2. A new grant kind, `{ type: "feature"; id }`, lets grantors grant features. This one primitive covers feats granted by ASI choice, race, item or DM gift, and features granting sub-features.
3. Only **roots** are stored on the character: class instances, the subclass id on them, and `acquisitions`. Everything downstream is derived.
4. **One resolver** walks all grantors and emits grants with their chain. Every builder (resources, actions, modifiers, advantage, proficiency, language, overrides) consumes the resolver's output instead of its own traversal.

### 4.2 Target shapes (design only, not final code)

- **`FeatureTemplate`** becomes pure content: `id`, optional `family`, `tags`, `grants`. It has **no** `level`, `source` or `appliesTo`.
- **Schedule moves to the owner.** Class and subclass templates carry a progression: `level → FeatureRef[]`, where a `FeatureRef` is an id or `{ id, appliesTo?: "primary" | "multiclass" }`. A feature listed at several levels (e.g. `druid_circle_feature` at 6/10/14) is one definition and several schedule entries. This removes the duplicated `level` and the existing drift (Cleric's `divine_domain_feature` is `level: 6` inside the level-5 bucket).
- **`FeatureGrant`** gains `{ type: "feature"; id }`. The `choice` grant gains an optional `picks: Num`, so entitlement lives on the grant instead of the pool.
- **`OptionGrant`** stays `Exclude<FeatureGrant, { type: "choice" }>`, which now permits `feature`. This is how a feat-as-option works. Options still cannot grant further pools.
- **`GrantorRef`** is a discriminated union: class slot (`instanceId`, `classId`, `level`), subclass (`subclassId`, `level`, always nested under its class), feature, option (`id`, `poolId`), acquisition. Race, item and background are added later with no resolver change.
- **`ResolvedGrant`** is `{ grant, chain: GrantorRef[] }`, ordered root to immediate grantor.
- **`ChoicePoolTemplate`** loses `classId`, `picksAtLevel` and `sourceId`. It keeps `optionIds`, `selectionTrigger` and `allowDuplicates`.
- **`Acquisition`** is `{ id, grantor: { kind, id }, reason }`, where `reason` is `{ kind: "innate" }` or `{ kind: "homebrew"; label; note? }`. It replaces `Character.features`.

### 4.3 The resolver: `resolveGrants(character)`

Derived, never stored. Required behavior:

- A class or subclass schedule entry is treated as a synthetic `feature` grant whose chain starts at the class slot. `getActiveFeatures` becomes "the `feature` grants, de-duplicated by id".
- It recurses through `feature` grants, and through `choice` grants by emitting the grants of **selected** options with an `option` hop.
- **Path-based.** If the same feature is reachable by two paths (Evasion from Rogue 7 and from Monk 7), it yields **two** `ResolvedGrant`s with different chains. It does not collapse them. This redundancy is deliberate.
- **Cycle guard and depth limit** (suggest 8): warn and stop. This is a backstop. Registration-time validation is the real guard.
- **Memoized per rebuild.** Cache keyed on the identity of `character.classes`, with `featureChoices` and `acquisitions` identity checked inside. `combatState` updates must not invalidate it.
- **Import constraint.** The resolver must not import `evaluate-predicate`, because that module already imports `features-helper` (for `hasFeature`) and the result would be a cycle. The resolver returns `picks` as an unevaluated `Num`. The choices code evaluates it.
- **Predicate hazard.** If grants ever gain gating predicates, those must not call back into the resolver (`hasFeature`, `optionSelected`). Keep `eligibility` as selection-time validation only. Any resolution-time gate must use a restricted leaf set and the `"closed"` unknown policy, because the `"open"` default grants the bonus when a predicate can't be evaluated.

### 4.4 Effect vs provenance on duplicates

For *effect*, consumers de-dupe by id:

- resources, actions, advantages, proficiencies and overrides de-dupe by id;
- passive modifiers de-dupe by `templateId`, so the same bonus never doubles.

For *provenance*, every source is kept: de-duped outputs must still expose `sources: GrantorRef[][]`, so the UI can show "Evasion, from Rogue 7 and Monk 7". The user explicitly prefers redundant sources to hidden ones.

This is separate from the runtime `ApplyModifierEffect.stacking` policy (`overlap | refresh | override | ignore`), which governs timed effects and is **out of scope**.

### 4.5 Choice identity

- A `ChoiceInstance` is keyed by `${scopeKey}/${poolId}`, where `scopeKey` is the root hop of the grant's chain (e.g. `class:c0`).
- Total picks for a key is the **sum** of `picks` over all resolved grants sharing that key.
- This yields two instances for a Fighter/Paladin multiclass, and lets Champion's second fighting style be a second grant into the same key (1+1 picks) while `allowDuplicates: false` still applies.
- `picksAtLevel` becomes an `Expr` (`E.table(E.classLevel(...), {...})`) on the grant. The cumulative table stays in one place and no filler features are needed.
- **Legacy keys** (no `/`) are re-keyed lazily in `bootstrapFeatureChoices`, to the first resolved scope granting that pool. Old data was already ambiguous for multiclass, so first-in-order is acceptable. This avoids needing the removed `pool.classId`.

### 4.6 Identity and sharing rules

- **Same feature id means identical grants and identical description in every locale.** Anything that differs gets its own id. Enforce with a test. Localization is keyed by feature id and built from flat object spreads, so a collision silently lets the last spread win.
- **Owned features** use `owner.name` ids (`cleric.life.divine_strike`, `barbarian.rage`). Namespace all owned features, not only colliding ones, so an id's meaning doesn't depend on what else exists.
- **Shared features** have bare ids in `data/features/shared/`: `evasion` (Rogue and Monk), `ability_score_improvement`, `potent_spellcasting`, `blessed_strikes`, `extra_attack` (the plain 2-attack version), and others the agent verifies as truly identical.
- **Divine Strike stays per domain.** The mechanics are identical but the damage type and text differ per domain, and that difference is unmodeled but matters for description. Add an optional `family: "divine_strike"` so the search screen can group them.
- **Fighter Extra Attack tiers** get their own ids (`fighter.extra_attack_2`, `_3`), since the base id is the 2-attack version.
- Feature ids are the localization keys. Renames must rename the localization keys in **both** `en` and `es`.

### 4.7 Settled decisions (do not reopen)

- Option B (grantor as a role plus computed provenance) is chosen over widening `Feature` (A) or an event-sourced ledger (C).
- Race is **deferred** to the trailing PR. It lands later as an acquisition root; `character.race` stays a string for now.
- A homebrew `reason` is **plain text** and does not link to an entity.
- No UI for choices exists yet, so there are no UI consumers of `featureChoices` to migrate.
- `ResourceGrantor` and `FeatureObtention` are **left untouched** in this PR. Their `featureId`s will go stale after renames, but nothing reads them, and the trailing PR replaces them with a reverse index. Do not rewrite them.

## 5. Known defects to fix on the way

1. **Subclass id vs registry key mismatch.** `CharacterForm` stores subclass *ids* but `getSubclassTemplateById` looks up by registry *key*. Storm Sorcery (key `storm`, id `storm_sorcery`) crashes the sheet. Wild Magic Sorcerer (key `wild_magic_sorcerer`, id `wild_magic`) silently resolves to the **Barbarian's** `wild_magic`. This must be fixed *before* the golden test, or the test bakes in the bug. Fix is: make id and key identical, and migrate saved characters in `hydrateCharacter`.
2. Cleric level-5 bucket contains a feature declaring `level: 6`.
3. Pool data errors: `fighting_style_fighter`, `_ranger` and `_paladin` all declare `id: "maneuvers"`; `fighting_style_*` gates at level 3 although Fighter gets it at 1; storm-herald pools and `buildProficiencyPool` use the string `"onLevelUp"` instead of `{ type: "levelUp" }`; Arcane Archer's `picksAtLevel` has `15: 6` (should be 5).
4. Colliding feature ids across data: `divine_strike`, `potent_spellcasting`, `blessed_strikes`, `extra_attack`, `ability_score_improvement`, `druid_circle_feature`, and others the agent must enumerate.

## 6. Commit plan

Branch: `refactor/grantor-foundation`. Each row is one commit unless marked "split". "Gate" is what must be true before moving on.

| # | Commit | Gate |
|---|---|---|
| 0 | `fix(data): subclass ids match registry keys` (ids, registry keys, migration in `hydrateCharacter`, subclass-integrity test, migration test) | Integrity test: keys equal ids, every picker id resolves to its own template, every subclass points at a real class |
| 1 | `test(core): golden grant sets` | Snapshots granted resource, action, modifier, advantage, proficiency, language and choice-pool id sets plus each level's tag signature, for every class and subclass at levels 1–20 and for several multiclass builds (including order-swapped pairs, to pin `appliesTo`). **Excludes feature ids and pick counts**, so later renames don't churn it. Subclasses store only what they add over the class. Snapshot committed |
| 2a | `test(data): feature id and localization collision detector` | Reports every id used by two different feature definitions, and every localization key that appears in more than one spread. Initially fails or lists collisions; it produces the work list for 2b. Does not fix anything |
| 2b | `refactor(data): namespace colliding feature ids` ×N (split by class) | Renames ids and localization keys in en and es together. Fixes the Cleric drift (the only intentional golden-snapshot change; call it out in the message). Collision detector now clean |
| 3 | `feat(core): feature registry + progression types` | `getFeatureRegistry` includes base features, duplicate ids throw. `progression` is accepted **alongside** `featuresByLevel` (transitional) |
| 4 | `refactor(data): extract shared features` | Shared features live in `data/features/shared/`. A test enforces "same id ⇒ identical grants and identical text in every locale" |
| 5a | `chore(scripts): codemod to extract features to registry` | The codemod only, no output. Dry-run mode prints a diff summary |
| 5b–5n | `refactor(data): extract <class> features to registry` ×13 (split further for large subclass sets) | Codemod output only. Golden test green. Reviewers read output, not hand edits |
| 6 | `refactor(core): remove featuresByLevel, level, source, appliesTo` | Transitional path deleted. `subclass-helper` and the registry-integrity test updated |
| 7 | `feat(core): GrantorRef + resolveGrants` | Cycle and depth tests, memoization test, path-redundancy test (Evasion twice). `getActiveFeatures` reimplemented on it with unchanged observable behavior |
| 8a | `refactor(core): resources and actions from resolver` | Golden green. Provenance `sources` exposed on de-duped outputs |
| 8b | `refactor(core): modifiers, advantage, proficiency, language, overrides from resolver` | Modifier de-dup by `templateId`. `getGrantsFromChoices` traversal deleted |
| 9 | `feat(core): feature grant + registry cycle validation` | `OptionGrant` permits `feature`. Registration validates that the feature graph is acyclic and every referenced id exists |
| 10 | `feat(core): choice entitlement on grants, slot-keyed instances` | `picks: Num` on the grant, `classId`, `picksAtLevel` and `sourceId` removed from pools, slot-keyed `ChoiceInstance`, lazy legacy re-key, `getUnfilledChoices` updated. Fighter/Paladin multiclass and Champion's second style covered by tests |
| 11 | `fix(data): pool id and trigger inconsistencies` | Section 5, item 3 |
| 12 | `feat(core): acquisitions replace character.features` | Migration in `hydrateCharacter`, resolver treats acquisitions as roots, homebrew-reason tests |
| 13 | `docs: grants.md; update architecture/domain-model/engine/project-structure` | Docs reflect shipped behavior only |

Order constraints: 0 before 1. 2a before 2b. 3 before 4–6. 7 before 8–12. 9 before 10. 8a/8b may be reordered but each must keep the golden test green.

## 7. Open gaps: resolve by reading the repo, or ask

**A. The agent should answer these from the codebase (and report findings before relying on them):**

1. Every usage of `featuresByLevel`, `.appliesTo`, and feature `.level` / `.source` outside `src/core/data/classes`. Known so far: `features-helper`, `subclass-helper`, the registry-integrity test. Are there others, including tests and scripts?
2. All consumers of `featureChoices`, `getTotalPicksForPool`, `getUnfilledChoices` and `getEligibleOptionsForPool`. None are expected in UI. Confirm.
3. The full list of colliding feature ids (not only the ones named here), and for each, whether the localization text is truly identical across the colliding definitions, or whether a spread has been silently overwriting differing text.
4. Which "shared" candidates are genuinely identical in grants **and** text in both `en` and `es`.
5. Every place that reads `Character.features`, `FeatureInstance`, or `RaceTemplate.features`, to size commit 12.
6. Whether `getSubclassTemplateById` / `getSubclassesForClass` are used anywhere that assumed key ≠ id.
7. Whether anything reads `FeatureTemplate.tags` for `"subclass"` besides `getSubclassUnlockLevel`. That helper must keep working after the schedule moves.

**B. The agent should ask the human (do not assume):**

1. **Adapter internals.** The codemod and the generator must agree on the new `owner.name` id scheme. Show me `parseSubclasses`, `deduplicateFeatureIds`, `toBaseId`, `writeClassTemplate`, `writeSubclassTemplate`, `writeClassLocalizationFile`, `writeSubclassLocalizationFiles`, `subclassFileNames`. What namespace suffix do subclass ids get today?
2. **Adapter update timing.** The existing adapter emits inline `featuresByLevel` with hand-filled `grants` that a re-run would overwrite. Should the adapter be updated in this PR (after commit 6) or in a follow-up? Default if unanswered: follow-up, and the adapter is not re-run on existing classes meanwhile.
3. **Codemod tooling.** Is `ts-morph` an acceptable dev dependency? If not, the codemod uses the TypeScript compiler API directly, which is more verbose.
4. **Per-grant stacking escape hatch.** Default is no stacking for the same effect, de-duped by id or `templateId`, with all sources kept. Is a `stacks: true` per-grant override wanted now, or deferred until a concrete case appears?
5. **Localization of acquisitions.** Homebrew reasons are free text. Should they be localizable (per-locale strings) or a single user-authored string? Default if unanswered: a single string.
6. **Snapshot hygiene.** Jest snapshots for about 100 subclasses will be large. Is committing them to the repo acceptable, or should the golden test serialize to a single JSON fixture instead?

**C. Known design gaps deliberately left open (do not solve here, do not close the door):**

- **Per-source grant parameters.** Spells are actions, and an innate racial Fireball differs from a wizard's in ability, cost and DC. Grants will eventually need a params payload. The `Grant` type must not prevent adding one, and this PR does not add it.
- **Damage-type-as-param** for a truly shared Divine Strike. Not needed now because Divine Strike stays per domain.
- **Features and overrides.** Features are not overridable, since overrides are granted *by* features. Revisit only if a real case appears.
- **Naming drift.** `ActionInstance` is used as a template in data files, and `ContentOrigin` (`book`), `FeatureTemplate.source` (removed) and `sourceId` all meant different things. Settle on `book` (where printed), `kind` (category) and provenance (edges only). Normalizing existing `sourceId` values belongs to the trailing PR.
- **Items as grantors with equip/attune gating** and **race as an acquisition root.** Both are follow-ups that must reduce to adding a `GrantorRef` kind plus a root, with no resolver redesign. If an implementation choice would make that false, flag it.

## 8. Invariants to preserve (add tests where cheap)

1. **Golden stability:** granted id sets per class, subclass, level and multiclass build do not change through commits 2–11, except the documented Cleric schedule fix.
2. **Derived over stored:** no resolved grant, chain, or provenance is persisted on `Character`.
3. **Resolver purity:** no React, no storage, no import of `evaluate-predicate`, deterministic for equal inputs.
4. **No orphaned references:** every feature id referenced from a schedule, grant, option or acquisition exists in the registry (validated at registration and in an integrity test).
5. **Backward-compatible hydration:** characters saved before this PR load without error. Legacy subclass ids, legacy un-slotted `featureChoices` keys, and `character.features` are all migrated in `hydrateCharacter` and covered by migration tests.
6. **`core/` stays UI-free.**

## 9. Definition of done

- All commits above merged in order, each independently green.
- `resolveGrants` is the only place that walks feature, option and choice graphs.
- `Character.features` is gone, replaced by `acquisitions`.
- No `level`, `source` or `appliesTo` on `FeatureTemplate`.
- A single documented answer to "what could grant X" (the reverse index, to be built in the trailing PR) and "what did grant X" (filter `resolveGrants` output) is **feasible** with no further data-model change. The refactor does not need to build either.
- `docs/grants.md` describes the shipped model, including the resolver contract, the sharing rule and the acquisition model.

## 10. First response expected from the agent

Do **not** write code yet. Reply with:
1. answers to the section 7A questions, with the evidence (grep results, file lists);
2. the section 7B questions it still needs answered;
3. confirmation of commit 0's exact file list;
4. any place where it believes this brief is wrong or underspecified.

Then wait for approval and proceed one commit at a time.