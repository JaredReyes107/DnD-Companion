import { CharacterClasses } from "@/core/entities/character/character-classes";
import { Character } from "@/core/entities/character/Character";
import { resolveGrants } from "./resolve-grants";

function makeCharacter(classes: CharacterClasses): Character {
  return {
    classes,
  } as Character;
}

describe("resolveGrants", () => {
  it("turns class progression entries into feature grants", () => {
    const grants = resolveGrants(
      makeCharacter({
        order: ["c0"],
        byId: {
          c0: { classId: "fighter", level: 3 },
        },
      }),
    );

    expect(grants.map((grant) => grant.grant.id)).toEqual([
      "fighter.proficiencies_fighter",
      "fighter.fighting_style_fighter",
      "fighter.second_wind",
      "fighter.action_surge",
      "fighter.martial_archetype",
    ]);
  });

  it("honors primary vs multiclass appliesTo filters", () => {
    const grants = resolveGrants(
      makeCharacter({
        order: ["c0", "c1"],
        byId: {
          c0: { classId: "barbarian", level: 1 },
          c1: { classId: "barbarian", level: 1 },
        },
      }),
    );

    expect(
      grants.filter((grant) => grant.grant.id === "barbarian.proficiencies_barbarian").length,
    ).toBe(1);
    expect(
      grants.filter(
        (grant) => grant.grant.id === "barbarian.multiclass_proficiencies_barbarian",
      ).length,
    ).toBe(1);
  });

  it("adds a subclass chain to subclass feature grants", () => {
    const grants = resolveGrants(
      makeCharacter({
        order: ["c0"],
        byId: {
          c0: { classId: "cleric", level: 3, subclassId: "life" },
        },
      }),
    );

    const domainGrant = grants.find(
      (grant) => grant.grant.id === "cleric.life.life_domain_spells",
    );

    expect(domainGrant).toBeDefined();
    expect(domainGrant?.chain).toEqual([
      {
        kind: "class-slot",
        instanceId: "c0",
        classId: "cleric",
        level: 1,
      },
      {
        kind: "subclass",
        subclassId: "life",
        level: 1,
      },
    ]);
  });
});
