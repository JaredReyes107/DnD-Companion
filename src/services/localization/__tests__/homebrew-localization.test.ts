import { resolveGameText } from "../game-localization-resolver";
import {
  clearHomebrewLocalization,
  registerHomebrewLocalization,
} from "../homebrew-localization";

afterEach(clearHomebrewLocalization);

it("homebrew ids resolve, and fall back across locales", () => {
  registerHomebrewLocalization("en", "resources", "t7b_prismatic", {
    name: "Prismatic Slot",
  });
  expect(resolveGameText("resources", "t7b_prismatic", "name", "en")).toBe(
    "Prismatic Slot",
  );
  expect(resolveGameText("resources", "t7b_prismatic", "name", "es")).toBe(
    "Prismatic Slot",
  );
  expect(
    resolveGameText("resources", "t7b_unknown", "name", "en"),
  ).toBeUndefined();
});

it("homebrew wins over base in the same locale, base wins over another locale's homebrew", () => {
  const baseEs = resolveGameText("resources", "spell_slot_1", "name", "es");
  expect(baseEs).toBeDefined();
  registerHomebrewLocalization("en", "resources", "spell_slot_1", {
    name: "Slot (en only)",
  });
  expect(resolveGameText("resources", "spell_slot_1", "name", "es")).toBe(
    baseEs,
  );
  registerHomebrewLocalization("es", "resources", "spell_slot_1", {
    name: "Mi espacio",
  });
  expect(resolveGameText("resources", "spell_slot_1", "name", "es")).toBe(
    "Mi espacio",
  );
});

it("merges fields instead of replacing the entry", () => {
  registerHomebrewLocalization("en", "costOptions", "t7b_opt", { name: "Pay" });
  registerHomebrewLocalization("en", "costOptions", "t7b_opt", {
    shortName: "P",
  });
  expect(resolveGameText("costOptions", "t7b_opt", "name", "en")).toBe("Pay");
  expect(resolveGameText("costOptions", "t7b_opt", "shortName", "en")).toBe(
    "P",
  );
});
