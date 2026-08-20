import { OptionTemplate } from "@/core/entities/rules/option-template";

export const FOUR_ELEMENTS_OPTIONS: Record<string, OptionTemplate> = {
  breath_of_winter: {
    id: "breath_of_winter",
    poolIds: ["four_elements_disciplines"],
    tags: ["combat", "control"],
    grants: [{ type: "action", id: "breath_of_winter" }],
  },
  clench_of_the_north_wind: {
    id: "clench_of_the_north_wind",
    poolIds: ["four_elements_disciplines"],
    tags: ["combat", "control"],
    grants: [{ type: "action", id: "clench_of_the_north_wind" }],
  },
  eternal_mountain_defense: {
    id: "eternal_mountain_defense",
    poolIds: ["four_elements_disciplines"],
    tags: ["combat", "control"],
    grants: [{ type: "action", id: "eternal_mountain_defense" }],
  },
  fangs_of_the_fire_snake: {
    id: "fangs_of_the_fire_snake",
    poolIds: ["four_elements_disciplines"],
    tags: ["combat", "damage"],
    grants: [
      { type: "action", id: "fangs_of_the_fire_snake" },
      { type: "action", id: "fangs_of_the_fire_snake_bite" },
    ],
  },
  fist_of_four_thunders: {
    id: "fist_of_four_thunders",
    poolIds: ["four_elements_disciplines"],
    tags: ["combat", "damage", "aoe"],
    grants: [{ type: "action", id: "fist_of_four_thunders" }],
  },
  fist_of_unbroken_air: {
    id: "fist_of_unbroken_air",
    poolIds: ["four_elements_disciplines"],
    tags: ["combat", "damage", "control"],
    grants: [{ type: "action", id: "fist_of_unbroken_air" }],
  },
  flames_of_the_phoenix: {
    id: "flames_of_the_phoenix",
    poolIds: ["four_elements_disciplines"],
    tags: ["combat", "damage", "aoe"],
    grants: [{ type: "action", id: "flames_of_the_phoenix" }],
  },
  gong_of_the_summit: {
    id: "gong_of_the_summit",
    poolIds: ["four_elements_disciplines"],
    tags: ["combat", "damage", "aoe"],
    grants: [{ type: "action", id: "gong_of_the_summit" }],
  },
  mist_stance: {
    id: "mist_stance",
    poolIds: ["four_elements_disciplines"],
    tags: ["defense", "utility", "transformation"],
    grants: [{ type: "action", id: "mist_stance" }],
  },
  ride_the_wind: {
    id: "ride_the_wind",
    poolIds: ["four_elements_disciplines"],
    tags: ["movement", "utility"],
    grants: [{ type: "action", id: "ride_the_wind" }],
  },
  river_of_hungry_flame: {
    id: "river_of_hungry_flame",
    poolIds: ["four_elements_disciplines"],
    tags: ["combat", "damage", "terrain", "aoe"],
    grants: [{ type: "action", id: "river_of_hungry_flame" }],
  },
  rush_of_the_gale_spirits: {
    id: "rush_of_the_gale_spirits",
    poolIds: ["four_elements_disciplines"],
    tags: ["combat", "control", "aoe"],
    grants: [{ type: "action", id: "rush_of_the_gale_spirits" }],
  },
  shape_the_flowing_river: {
    id: "shape_the_flowing_river",
    poolIds: ["four_elements_disciplines"],
    tags: ["utility", "terrain"],
    grants: [{ type: "action", id: "shape_the_flowing_river" }],
  },
  sweeping_cinder_strike: {
    id: "sweeping_cinder_strike",
    poolIds: ["four_elements_disciplines"],
    tags: ["combat", "damage", "aoe"],
    grants: [{ type: "action", id: "sweeping_cinder_strike" }],
  },
  water_whip: {
    id: "water_whip",
    poolIds: ["four_elements_disciplines"],
    tags: ["combat", "damage", "control"],
    grants: [{ type: "action", id: "water_whip" }],
  },
  wave_of_rolling_earth: {
    id: "wave_of_rolling_earth",
    poolIds: ["four_elements_disciplines"],
    tags: ["combat", "control", "terrain", "aoe"],
    grants: [{ type: "action", id: "wave_of_rolling_earth" }],
  },
};
