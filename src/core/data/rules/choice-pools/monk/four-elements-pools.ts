import { ChoicePoolTemplate } from "@/core/entities/rules/choice-pool-template";

export const FOUR_ELEMENTS_POOLS: Record<string, ChoicePoolTemplate> = {
  four_elements_disciplines: {
    id: "four_elements_disciplines",
    sourceId: "four_elements",
    classId: "monk",
    selectionTrigger: { type: "levelUp" },
    optionIds: [
      "breath_of_winter",
      "clench_of_the_north_wind",
      "eternal_mountain_defense",
      "fangs_of_the_fire_snake",
      "fist_of_four_thunders",
      "fist_of_unbroken_air",
      "flames_of_the_phoenix",
      "gong_of_the_summit",
      "mist_stance",
      "ride_the_wind",
      "river_of_hungry_flame",
      "rush_of_the_gale_spirits",
      "shape_the_flowing_river",
      "sweeping_cinder_strike",
      "water_whip",
      "wave_of_rolling_earth",
    ],
    picksAtLevel: { 3: 1, 6: 2, 11: 3, 17: 4 },
    allowDuplicates: false,
  },
};
