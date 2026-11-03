/* eslint-disable @typescript-eslint/no-explicit-any */
import { duplicateEffectKeys } from "../action-effects";
import { registerHomebrewAction } from "@/core/data/registries/actions.registry";

const act = (effects: any[]) =>
  ({
    id: "t5b",
    sourceId: "t",
    boards: [],
    duration: { kind: "instantaneous" },
    effects,
  }) as any;

it("no keys, or distinct keys, are fine", () => {
  expect(
    duplicateEffectKeys(act([{ type: "endEffects" }, { type: "endEffects" }])),
  ).toEqual([]);
  expect(
    duplicateEffectKeys(
      act([
        { type: "endEffects", key: "a" },
        { type: "endEffects", key: "b" },
      ]),
    ),
  ).toEqual([]);
});
it("reports repeated keys once", () => {
  expect(
    duplicateEffectKeys(act([{ key: "a" }, { key: "a" }, { key: "a" }])),
  ).toEqual(["a"]);
});
it("homebrew registration rejects duplicates", () => {
  expect(() =>
    registerHomebrewAction(act([{ key: "a" }, { key: "a" }])),
  ).toThrow(/duplicate effect keys/);
});
