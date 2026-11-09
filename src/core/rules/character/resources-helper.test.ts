import { Character } from "@/core/entities/character/Character";
import { getGrantPaths } from "./features-helper";
import {
  buildCharacterClassResources,
  getResourcesFromFeatures,
} from "./resources-helper";

const clericPaladin = {
  classes: {
    order: ["cleric", "paladin"],
    byId: {
      cleric: { classId: "cleric", level: 2 },
      paladin: { classId: "paladin", level: 3 },
    },
  },
  features: {},
  featureChoices: {},
  resources: {},
} as unknown as Character;

describe("resource grant sources", () => {
  it("de-duplicates an effect while retaining each grant path", () => {
    const channelDivinity = getResourcesFromFeatures(
      getGrantPaths(clericPaladin),
    ).find(({ id }) => id === "channel_divinity");

    expect(channelDivinity?.sources).toHaveLength(2);
    expect(
      channelDivinity?.sources
        .map((chain) => chain.find((ref) => ref.kind === "feature")?.id)
        .sort(),
    ).toEqual(["cleric.channel_divinity", "paladin.sacred_oath"]);
    expect(buildCharacterClassResources(clericPaladin)).toHaveProperty(
      "channel_divinity",
    );
    expect(
      Object.keys(buildCharacterClassResources(clericPaladin)).filter(
        (id) => id === "channel_divinity",
      ),
    ).toHaveLength(1);
  });
});
