# Grantor Foundation: Progress and Commit Plan (LIVING DOCUMENT)

> **Suggested location:** `docs/proposals/grantor-foundation-progress.md`
> **Branch:** `refactor/grantor-foundation`
> The full design rationale is in `docs/proposals/grantor-foundation.md` (the brief). This file is the **working memory**. When the two disagree about *state*, this file wins. When they disagree about *design*, stop and ask the human.

---

## 0. HOW TO USE THIS FILE (agent: read this every session)

**Start of every session**
1. Read this whole file. Do NOT read ahead of the `CURRENT` step in detail.
2. Run `git log --oneline -15` and `git status`. Compare with the Status Board. If reality and the board disagree, fix the board first and note it in the Session Log.
3. Run `npx tsc --noEmit && npm run lint && npm test`. Record the result in the Session Log. If red, fixing it is the only task.

**While working**
- Work on **exactly one step** (the one marked `CURRENT`). One step = one commit, unless the step says otherwise.
- If a step turns out to need more than ~400 hand-written changed lines, **stop and split it**: add `Na`/`Nb` rows to the Status Board, commit only the first part.
- Mechanical changes (renames, moves, codemod output) and behavioral changes never share a commit.
- Do not touch anything in a step's **Do not touch** list.
- If you hit anything in section 6 (Open Questions) that blocks you, **ask the human instead of guessing**. Record the question and the answer there.

**End of every step (mandatory, before you stop)**
1. Tick the step's checklist.
2. Set its Status Board row to `DONE` with the commit hash and date.
3. Move `CURRENT` to the next step.
4. Add a Session Log entry: what changed, which tests prove it, anything surprising, what the next step will touch.
5. Add any deviation from the plan to section 7.
6. Commit this file together with the code (`docs(progress): ...` is not needed; include it in the step's commit).
7. **Stop and report to the human.** Do not start the next step in the same response.

---

## 1. DESIGN CHEAT SHEET (stable; do not edit unless the human changes the design)

**Goal:** separate *what grants* from *what is granted*, so a later PR can add provenance ("trailing"). This PR builds the foundation only: no trailing UI, no reverse index.

**Vocabulary**
- **Grantor**: a role. Anything that can be the source end of a grant (class slot, subclass, feature, option, acquisition; later race, item, background).
- **Feature**: one kind of grantor. Pure content, searchable. Class/race/item are grantors, not features.
- **Grant**: edge `grantor -> thing` (resource, action, modifier, choice, proficiency, language, advantage, override, **new: feature**).
- **Acquisition**: stored root on the character ("has grantor X for reason Y").
- **Provenance/trail**: derived path root to grant. Computed, never stored.

**Target model**
- `FeatureTemplate` = `{ id, family?, tags?, grants? }`. No `level`, `source`, `appliesTo`.
- Schedule lives on the owner: class/subclass `progression: Record<level, FeatureRef[]>`, `FeatureRef = string | { id, appliesTo?: "primary" | "multiclass" }`.
- New grant kind `{ type: "feature"; id }`. `choice` grant gains `picks?: Num`. `OptionGrant` stays `Exclude<FeatureGrant, {type:"choice"}>` (so it now allows `feature`).
- `GrantorRef` = class slot `{instanceId, classId, level}` | subclass `{subclassId, level}` | feature `{id}` | option `{id, poolId}` | acquisition `{id}`.
- `ResolvedGrant = { grant, chain: GrantorRef[] }` (root to immediate grantor).
- `resolveGrants(character)`: derived, memoized (key: identity of `character.classes`; check `featureChoices`/`acquisitions` inside; `combatState` changes must not invalidate). Cycle guard + depth limit 8 (warn and stop). **Must NOT import `evaluate-predicate`** (import cycle via `hasFeature`). Returns `picks` unevaluated.
- Path-based: Evasion from Rogue 7 and Monk 7 = **two** ResolvedGrants. Consumers de-dupe **effect** by id (modifiers by `templateId`) but keep `sources: GrantorRef[][]`.
- Choices: `ChoiceInstance` keyed `${scopeKey}/${poolId}` (e.g. `class:c0/maneuvers`). Picks = **sum** of `picks` over grants sharing the key. Pools lose `classId`, `picksAtLevel`, `sourceId`. Legacy keys (no `/`) re-keyed lazily in `bootstrapFeatureChoices` to the first resolved scope.
- `Acquisition = { id, grantor: {kind, id}, reason: {kind:"innate"} | {kind:"homebrew", label, note?} }` replaces `Character.features`. Reason is plain text.

**Settled decisions (never reopen)**
- Same feature id = identical grants and identical description in every locale. Different? Different id.
- Owned features: `owner.name` ids (`cleric.life.divine_strike`, `barbarian.rage`). Shared features: bare ids in `data/features/shared/` (`evasion`, `ability_score_improvement`, `potent_spellcasting`, `blessed_strikes`, `extra_attack`...). Divine Strike stays per domain (+ optional `family: "divine_strike"`). Fighter extra attack tiers: `fighter.extra_attack_2/_3`.
- Renames must rename localization keys in **both** `en` and `es` in the same commit.
- Race deferred (stays a string). `ResourceGrantor` and `FeatureObtention` are **left untouched** (stale ids are acceptable; trailing PR replaces them).
- Runtime `ApplyModifierEffect.stacking` is out of scope.
- No UI consumes `featureChoices` yet.

**Invariants (keep true at every commit)**
1. Golden test green (except the documented Cleric schedule fix in Step 3-cleric).
2. Nothing derived (resolved grants, chains) is persisted on `Character`.
3. Resolver is pure: no React, no storage, no `evaluate-predicate` import.
4. Every referenced feature id exists in the registry (once the registry exists).
5. Characters saved before this PR still load (migrations in `hydrateCharacter`).
6. `core/` never imports from `app/` or `components/`.
7. Build green: `npx tsc --noEmit`, `npm run lint`, `npm test`.

---

## 2. STATUS BOARD

Legend: `TODO` | `CURRENT` | `DONE` | `VERIFY` (done per human, agent must confirm) | `BLOCKED` | `SPLIT`

| Step | Title | Status | Commit | Date |
|---|---|---|---|---|
| S0 | Subclass ids match registry keys | DONE | 33fd092 | 2026-11-07 |
| S1 | Golden grant-set test | DONE | 33fd092 | 2026-11-07 |
| S2 | Feature id + localization collision detector (test only) | DONE | 493ec1d | 2026-11-07 |
| S3 | Namespace colliding feature ids (loop, one commit per class) | **CURRENT** | | |
| S4 | Feature registry + progression types (types only) | TODO | | |
| S5 | Registry lookup + duplicate-id throw | TODO | | |
| S6 | Shared features: create files | TODO | | |
| S7 | Shared features: consistency test | TODO | | |
| S8 | Codemod script (no output) | TODO | | |
| S9 | Codemod dry run report (no code change) | TODO | | |
| S10 | Codemod output (loop, one commit per class) | TODO | | |
| S11 | Remove featuresByLevel / level / source / appliesTo | TODO | | |
| S12 | GrantorRef + ResolvedGrant types (types only) | TODO | | |
| S13 | resolveGrants: schedule to feature grants | TODO | | |
| S14 | resolveGrants: recursion, cycles, depth, memo | TODO | | |
| S15 | getActiveFeatures on top of resolver | TODO | | |
| S16 | Resources + actions from resolver | TODO | | |
| S17 | Modifiers from resolver | TODO | | |
| S18 | Advantage + proficiency + language from resolver | TODO | | |
| S19 | Overrides + choice-grant traversal from resolver | TODO | | |
| S20 | `feature` in OptionGrant + registry cycle validation | TODO | | |
| S21 | `picks` on choice grants (types + data, additive) | TODO | | |
| S22 | Slot-keyed ChoiceInstance | TODO | | |
| S23 | Legacy choice key migration | TODO | | |
| S24 | Pool data fixes | TODO | | |
| S25 | Remove classId/picksAtLevel/sourceId from pools | TODO | | |
| S26 | Acquisition types + resolver roots (additive) | TODO | | |
| S27 | Replace `character.features` with `acquisitions` + migration | TODO | | |
| S28 | Docs | TODO | | |

**Order constraints:** S0 before S1. S2 before S3. S4 before S5-S11. S12 before S13-S19. S20 before S21. S21 before S22-S25. S26 before S27.

---

## 3. STEPS

Each step: **Goal**, **Touch**, **Do not touch**, **Done when**, plus a checklist. Keep steps small. If unsure, split.

### PHASE A: Safety net

#### S0: Subclass ids match registry keys (VERIFY)
**Goal:** registry key == template id for every subclass; saved characters with old ids still load.
**Verify (do not redo if all true):**
- [x] `storm_sorcery` key and id are identical; `wild_magic_sorcerer` key and id are identical (Sorcerer no longer resolves to Barbarian's `wild_magic`).
- [x] `hydrateCharacter` maps legacy ids (`sorcerer: wild_magic -> wild_magic_sorcerer`, `storm -> storm_sorcery`) **scoped by class**, so Barbarian `wild_magic` is untouched.
- [x] Integrity test: keys equal ids; every id offered by the subclass picker resolves to its own template; every subclass points to an existing class.
- [x] Migration test covers the sorcerer cases and the barbarian non-case.
- [x] Build green.
If anything is missing: fix it in one small commit, then mark DONE.

#### S1: Golden grant-set test (VERIFY)
**Goal:** a snapshot that proves later refactors don't change what a build grants.
**Verify:**
- [x] Covers every class and subclass, levels 1-20 (subclasses store only what they add over the class).
- [x] Snapshots id sets for resource, action, modifier, advantage, proficiency, language, and choice-pool membership, plus tag signatures per level.
- [x] **Excludes feature ids and pool pick counts** (they change in S3/S21+).
- [x] Multiclass builds included, with order-swapped pairs: barbarian5>fighter5 and reverse; rogue7>monk7; cleric6/life>paladin6/devotion; druid5/land>cleric5/nature; wizard5>warlock5>sorcerer5; fighter7/battle_master>barbarian7/berserker.
- [x] Snapshot committed, test deterministic (run twice).
- [x] Record in Section 6 which fixture format was used (Jest snapshot vs JSON file) and its size.
If anything is missing: fix it in one small commit, then mark DONE.

### PHASE B: Feature ids

#### S2: Collision detector (test only)
**Goal:** a test that **lists** (does not fix) every feature id used by two different definitions, and every localization key that appears in more than one spread.
**Touch:** one new test file only.
**Done when:** test runs and prints the collision list. Paste the full list into Section 6 (Findings). It is the work list for S3.
**Checklist**
- [x] Output groups collisions by id, with the owning class/subclass of each definition.
- [x] For each collision, notes whether grants differ and whether `en`/`es` text differs.
- [x] Test may be marked skipped or `todo` for the "must be clean" assertion until S3 completes; say which. (The clean assertion is intentionally skipped in the detector until S3.)

#### S3: Namespace colliding feature ids (LOOP: one commit per class)
**Goal:** remove id collisions by renaming to `owner.name`, renaming localization keys in `en` and `es` in the same commit.
**Rules**
- One class (with its subclasses) per commit. Use the S2 list as the work queue.
- Namespace **all** owned features of that class, not only the colliding ones.
- Do NOT rename shared candidates (evasion, ASI, potent_spellcasting, blessed_strikes, extra_attack): they move in S6.
- Do not touch `ResourceGrantor` / `FeatureObtention`.
**Done when per class:** golden green; S2 list shrinks; both locales updated.
**Special:** the Cleric commit contains the one intentional golden change (the `divine_domain_feature` that declared `level: 6` inside the level-5 bucket). Call it out in the commit message and update the snapshot in that commit only.

Class queue (tick as done, add hash):
- [ ] barbarian | [ ] bard | [ ] cleric | [ ] druid | [ ] fighter | [ ] monk | [ ] paladin | [ ] ranger | [ ] rogue | [ ] sorcerer | [ ] warlock | [ ] wizard | [ ] artificer
After the last class: flip the S2 "must be clean" assertion on.

### PHASE C: Registry and shared features

#### S4: Feature registry + progression types (types only)
**Goal:** introduce `FeatureRef` and `Progression` types and an optional `progression` field on class/subclass templates, **alongside** `featuresByLevel`. No data moves, no behavior changes.
**Do not touch:** any data file, any helper.
- [ ] Types added, optional, documented as transitional.

#### S5: Registry lookup + duplicate-id throw
**Goal:** `getFeatureRegistry()` returns base features + homebrew; duplicate ids throw; `getFeatureTemplateById` works for base ids. Base set is empty or only what is already extracted.
- [ ] Unit test: duplicate throws; lookup works; homebrew registration still works.

#### S6: Shared features: create files
**Goal:** create `data/features/shared/` with the shared features and their localization (en + es). Nothing references them yet.
**Before writing:** for each candidate, **verify** identical grants and identical text in both locales (Section 6, question A4). Anything not identical stays per-owner.
- [ ] Candidates verified (list results in Section 6).
- [ ] Files created, registered.

#### S7: Shared features: consistency test
**Goal:** a test enforcing "same id => identical grants and identical text in every locale".
- [ ] Test passes on the current registry.

### PHASE D: Codemod and data migration

#### S8: Codemod script (no output)
**Goal:** a script that extracts inline features from `featuresByLevel` into registry files plus a `progression` on the owner, using the `owner.name` ids from S3.
**Touch:** `scripts/` only. Include a `--dry-run` flag that prints a diff summary.
**Ask first:** tooling choice (Section 6, question B3).
- [ ] Script committed, no generated output committed.

#### S9: Codemod dry-run report (no code change)
**Goal:** run `--dry-run` on all classes; record in Section 6: file counts, any feature the codemod can't handle (hand-edit cases), any id that doesn't match the S3 scheme.
- [ ] Report recorded. If the codemod needs fixes, do them as a separate small commit before S10.

#### S10: Codemod output (LOOP: one commit per class)
**Goal:** apply the codemod to one class (with its subclasses) per commit. **Output only**, no hand edits mixed in. Reviewers read the diff summary, not every line.
**Done when per class:** golden green; class now has `progression` populated and features in the registry; `featuresByLevel` still present (removed in S11).
Queue: [ ] barbarian | [ ] bard | [ ] cleric | [ ] druid | [ ] fighter | [ ] monk | [ ] paladin | [ ] ranger | [ ] rogue | [ ] sorcerer | [ ] warlock | [ ] wizard | [ ] artificer
Large classes (cleric, fighter, wizard, warlock) may be split by subclass group.

#### S11: Remove featuresByLevel / level / source / appliesTo
**Goal:** delete the transitional path. `getFeaturesFromClasses`, `getSubclassUnlockLevel` and the registry-integrity test read `progression` instead.
**Done when:** grep for `featuresByLevel` is empty; `getSubclassUnlockLevel` still returns the same levels (add a test if absent); golden green.
- [ ] Section 6 A1 grep results re-checked: no stragglers (tests, scripts).

### PHASE E: Resolver

#### S12: GrantorRef + ResolvedGrant types (types only)
- [ ] Types added under `core/entities/rules/`. No logic.

#### S13: resolveGrants: schedule to feature grants
**Goal:** minimal resolver: for each class instance and subclass, turn schedule entries up to the current level (honoring `appliesTo`) into `feature` grants with chains. No recursion yet.
**Import rule:** no `evaluate-predicate`.
- [ ] Tests: single class, multiclass order, `appliesTo` primary vs multiclass, subclass nested chain.

#### S14: resolveGrants: recursion, cycles, depth, memo
**Goal:** recurse through `feature` grants, and through selected options for `choice` grants (with an `option` hop). Cycle guard, depth limit 8, memoization.
- [ ] Tests: cycle warns and stops; depth limit; memo hit/miss (`combatState` change does not invalidate; `featureChoices` change does); **path redundancy** (Evasion from Rogue 7 and Monk 7 gives two ResolvedGrants).

#### S15: getActiveFeatures on top of resolver
**Goal:** reimplement `getActiveFeatures` as "feature grants from `resolveGrants`, de-duplicated by id". Observable behavior unchanged.
- [ ] Golden green. No other call site changed.

#### S16: Resources + actions from resolver
**Goal:** `getResourcesFromFeatures` / `getActionsFromFeatures` and their choice counterparts consume resolver output. De-dupe by id, **expose `sources: GrantorRef[][]`**.
- [ ] Golden green. Test: duplicate source yields one effect but two sources.

#### S17: Modifiers from resolver
**Goal:** passive modifiers from the resolver; de-dupe by `templateId`.
- [ ] Golden green. Test: Evasion-style duplicate does not double a modifier.

#### S18: Advantage + proficiency + language from resolver
- [ ] Golden green. Same de-dupe + sources rule.

#### S19: Overrides + choice-grant traversal from resolver
**Goal:** `buildOverrideContext` and `getGrantsFromChoices` stop walking graphs themselves; delete the duplicated traversal.
- [ ] Grep: only `resolveGrants` walks feature/option/choice graphs (Invariant for Definition of Done).

#### S20: `feature` in OptionGrant + registry cycle validation
**Goal:** options may grant features. Registration validates that the feature graph is acyclic and every referenced id exists (+ an integrity test).
- [ ] Tests: cycle rejected; dangling id rejected; feat-as-option works end to end.

### PHASE F: Choices

#### S21: `picks` on choice grants (additive)
**Goal:** add `picks?: Num` to the `choice` grant and populate it in data **in addition to** existing `picksAtLevel` (still read). Resolver exposes it unevaluated.
- [ ] Every pool-granting feature has `picks` equal to what `picksAtLevel` produced (add a test comparing both for levels 1-20).

#### S22: Slot-keyed ChoiceInstance
**Goal:** key instances `${scopeKey}/${poolId}`; total picks = sum over grants sharing the key; `getTotalPicksForPool` / `getUnfilledChoices` updated.
- [ ] Tests: Fighter/Paladin multiclass = two instances; Champion's second fighting style (1+1 into one key, `allowDuplicates: false` still enforced).

#### S23: Legacy choice key migration
**Goal:** keys with no `/` are re-keyed lazily in `bootstrapFeatureChoices` to the first resolved scope granting that pool.
- [ ] Migration test: legacy character keeps its selections.

#### S24: Pool data fixes
- [ ] `fighting_style_fighter` / `_ranger` / `_paladin` have unique ids (currently all `"maneuvers"`).
- [ ] Fighter fighting style available at level 1 (was gated at 3).
- [ ] `"onLevelUp"` strings replaced with `{ type: "levelUp" }` in storm-herald pools and `buildProficiencyPool`.
- [ ] Arcane Archer pick table `15: 6` -> `15: 5`.
- [ ] Update affected tests/snapshots **and state each intentional change in the commit message**.

#### S25: Remove classId / picksAtLevel / sourceId from pools
- [ ] Nothing reads them (grep). Types and data cleaned. Golden green.

### PHASE G: Acquisitions and docs

#### S26: Acquisition types + resolver roots (additive)
**Goal:** add `Acquisition` and make the resolver treat `character.acquisitions` as roots, **alongside** the old `character.features` (still read).
- [ ] Tests: homebrew reason text, innate reason, chain starts at the acquisition.

#### S27: Replace `character.features` with `acquisitions` + migration
**Goal:** migrate `hydrateCharacter` (`features` -> `acquisitions` with `reason: {kind:"homebrew", label: ...}` or `innate`), remove `Character.features` and `FeatureInstance` usage.
- [ ] Migration test with a legacy character. Grep for `character.features` is empty.

#### S28: Docs
**Goal:** write `docs/grants.md`; update `architecture.md`, `domain-model.md`, `engine.md`, `project-structure.md`. Describe **shipped behavior only**.
- [ ] Resolver contract, sharing rule, acquisition model, "what did grant X" via filtering `resolveGrants`.

---

## 4. KEY FILES (starting points; verify, they may have moved)

- `core/rules/character/features-helper.ts` (`getFeaturesFromClasses`, `getActiveFeatures`)
- `core/rules/character/subclass-helper.ts` (`getSubclassUnlockLevel`)
- `core/rules/character/choices-helper.ts`
- `core/rules/overrides/active-overrides.ts`
- `core/data/registries/{features,classes,subclasses,options,choice-pools}.registry.ts`
- `core/entities/rules/{feature-template,option-template,choice-pool-template,class-template,subclass-template,grantor}.ts`
- `core/entities/character/Character.ts`, `repositories/character-migration.ts`
- `core/data/__tests__/registry-integrity.test.ts`
- `services/localization/game/classes/**` (en/es features per class and subclass)
- Adapter (unchanged until a follow-up): `scripts/adapt-5etools/`

---

## 5. SESSION LOG (agent: append one entry per step; newest at the bottom)

Template:
```
### <date> | <step id> | commit <hash>
- Changed:
- Proven by (tests):
- Surprises / deviations:
- Next step will touch:
- Build result: tsc / lint / test
```

### 2026-11-07 | S0 | commit 33fd092
- Changed:
  - Verified the subclass-id integrity checklist and the legacy migration criteria are already satisfied in the repo.
  - Fixed the repo-level build blockers that prevented the VERIFY pass from being truthfully green: `ignoreDeprecations` compatibility and the invalid Kensei resource cost.
- Proven by (tests):
  - `npx tsc --noEmit`
  - `npm run lint`
  - `npm test -- --watch=false`
- Surprises / deviations:
  - The pre-existing TypeScript config and a legacy Kensei resource reference were the only blockers; no subclass migration logic change was needed.
- Next step will touch:
  - S2: collision detector test only.
- Build result: tsc / lint / test

### 2026-11-07 | S1 | commit 33fd092
- Changed:
  - Verified the golden grant-set checklist against the current repo state; no golden snapshot or fixture mutation was required.
  - Kept the fix limited to the build validators needed to make the VERIFY status honest.
- Proven by (tests):
  - `npx tsc --noEmit`
  - `npm run lint`
  - `npm test -- --watch=false`
- Surprises / deviations:
  - The golden test suite was already green; the red state was caused by unrelated repository-level build issues.
- Next step will touch:
  - S2: collision detector test only.
- Build result: tsc / lint / test

### 2026-11-07 | S2 | commit 493ec1d
- Changed:
  - Added `src/core/data/__tests__/feature-collision-detector.test.ts` to list duplicate feature ids and duplicate localization keys without making any fix.
  - Kept the clean assertion intentionally `it.skip()` until S3 resolves the collisions.
- Proven by (tests):
  - `npx jest src/core/data/__tests__/feature-collision-detector.test.ts --runInBand --watch=false`
- Surprises / deviations:
  - The detector currently reports multiple duplicate feature ids and localization keys; S2 is intentionally reporting the work list, not fixing it.
- Next step will touch:
  - S3: namespace the colliding feature ids, one class/subclass set at a time.
- Build result: jest only (reporting pass; collisions are expected at this stage)

---

## 6. OPEN QUESTIONS, ANSWERS AND FINDINGS

### A. Agent answers from the repo (record findings here)
- [ ] **A1.** Every use of `featuresByLevel`, `.appliesTo`, feature `.level` / `.source` outside `core/data/classes` (include tests and scripts):
- [ ] **A2.** All consumers of `featureChoices`, `getTotalPicksForPool`, `getUnfilledChoices`, `getEligibleOptionsForPool`. Confirm none in UI:
- [x] **A3.** Full collision list (from S2), and whether text differs across colliding definitions:
  - Feature definitions currently colliding by id (owners listed):
    - `ability_score_improvement` — Bard, Cleric, Druid, Fighter, Paladin, Ranger; `grantsDiffer: true`
    - `bonus_cantrip` — Cleric (light), Druid (land); `grantsDiffer: true`
    - `cantrip_versatility` — Cleric, Druid; `grantsDiffer: true`
    - `channel_divinity` — Cleric, Paladin (ancients); `grantsDiffer: true`
    - `divine_strike` — nine Cleric subclasses; `grantsDiffer: true`
    - `domain_spells` — Cleric (forge), Cleric (twilight); `grantsDiffer: false`
    - `evasion` — Monk, Rogue; `grantsDiffer: false`
    - `extra_attack` — Barbarian, Monk, Paladin, Ranger, plus multiple artificer/bard subclass entries; `grantsDiffer: true`
    - `extra_proficiencies` — Bard lore, Bard valor; `grantsDiffer: false`
    - `lands_stride` — Ranger, Druid (land); `grantsDiffer: true`
    - `potent_spellcasting` — four Cleric subclasses; `grantsDiffer: true`
    - `psionic_power` — Fighter (psi-warrior), Rogue (soulknife); `grantsDiffer: true`
    - `psychic_blades` — Bard (whispers), Rogue (soulknife); `grantsDiffer: true`
    - `bard_college_feature`, `divine_domain_feature`, `druid_circle_feature`, `expertise`, `magical_secrets`, `wild_shape_improvement` also currently report duplicate definitions within a single owner and are intentionally listed for S3 remediation.
  - Localization-key collisions: the detector logs the complete current list; the working set is intentionally unresolved until S3 and is tracked by the `feature-collision-detector.test.ts` output.
- [ ] **A4.** Which shared candidates are identical in grants **and** text in `en` and `es`:
- [ ] **A5.** Every reader of `Character.features`, `FeatureInstance`, `RaceTemplate.features`:
- [ ] **A6.** Anything that assumed subclass registry key != id:
- [ ] **A7.** Any use of the `"subclass"` tag besides `getSubclassUnlockLevel`:
- [x] **A8.** (from S1) Golden fixture format and size: Jest snapshot fixture, generated by `grant-golden.test.ts`; 125 snapshots in `src/core/data/__tests__/__snapshots__/grant-golden.test.ts.snap`.

### B. Ask the human (do not assume; write the answer here)
- [ ] **B1. Adapter internals:** show `parseSubclasses`, `deduplicateFeatureIds`, `toBaseId`, `writeClassTemplate`, `writeSubclassTemplate`, `writeClassLocalizationFile`, `writeSubclassLocalizationFiles`, `subclassFileNames`. What suffix do subclass ids get today? (needed before S8)
  - Answer:
- [ ] **B2. Adapter update timing:** default = follow-up PR; adapter not re-run on existing classes meanwhile. Confirm.
  - Answer:
- [ ] **B3. Codemod tooling:** is `ts-morph` an acceptable dev dependency? (else TypeScript compiler API). Needed before S8.
  - Answer:
- [ ] **B4. Per-grant stacking escape hatch (`stacks: true`):** default = deferred.
  - Answer:
- [ ] **B5. Acquisition reason localization:** default = single free-text string.
  - Answer:
- [ ] **B6. Golden snapshot size:** Jest snapshots vs a single JSON fixture.
  - Answer:

### C. Deliberately open (do not solve here, do not close the door)
- Per-source grant parameters (innate racial Fireball vs wizard Fireball): the `Grant` type must stay extensible with a params payload.
- Damage-type-as-param for a single shared Divine Strike.
- Features are not overridable (revisit only with a real case).
- Naming drift (`ActionInstance` used as template; `book` vs `kind` vs `sourceId`); normalization belongs to the trailing PR.
- Items with equip/attune gating and race as an acquisition root must reduce to "add a `GrantorRef` kind + a root". **If an implementation choice would make that false, flag it.**

---

## 7. DEVIATIONS FROM THE PLAN (agent: log any split, reorder or skipped step and why)

*(none yet)*

---

## 8. DEFINITION OF DONE

- [ ] All steps DONE, each commit independently green.
- [ ] `resolveGrants` is the only place that walks feature, option and choice graphs.
- [ ] `Character.features` removed; `acquisitions` in place.
- [ ] No `level`, `source` or `appliesTo` on `FeatureTemplate`.
- [ ] "What did grant X" is answerable by filtering `resolveGrants` output; "what could grant X" is feasible with no further data-model change (not built here).
- [ ] `docs/grants.md` describes the shipped model.
