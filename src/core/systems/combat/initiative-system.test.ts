import { rollInitiative, ParticipantRollingInfo } from "./initiative-system";
import { DiceProvider } from "../../systems/dice/DiceProvider";

describe("InitiativeSystem", () => {
  let mockDice: DiceProvider;

  beforeEach(() => {
    mockDice = {
      roll: jest.fn(),
    } as unknown as DiceProvider;
  });

  it("should roll normal initiative without state", () => {
    (mockDice.roll as jest.Mock).mockReturnValue([10]);
    const participants: Record<string, ParticipantRollingInfo> = {
      p1: { id: "p1", initiative: 2, dexModifier: 14 },
    };

    const result = rollInitiative(participants, mockDice);
    expect(result.scores["p1"]).toBe(12);
    expect(mockDice.roll).toHaveBeenCalledWith(20, 1);
  });

  it("should roll with advantage (taking highest)", () => {
    (mockDice.roll as jest.Mock).mockReturnValue([5, 15]);
    const participants: Record<string, ParticipantRollingInfo> = {
      p1: {
        id: "p1",
        initiative: 0,
        dexModifier: 10,
        rollState: { advantage: true, disadvantage: false },
      },
    };

    const result = rollInitiative(participants, mockDice);
    expect(result.scores["p1"]).toBe(15);
    expect(mockDice.roll).toHaveBeenCalledWith(20, 2);
  });

  it("should roll with disadvantage (taking lowest)", () => {
    (mockDice.roll as jest.Mock).mockReturnValue([5, 15]);
    const participants: Record<string, ParticipantRollingInfo> = {
      p1: {
        id: "p1",
        initiative: 0,
        dexModifier: 10,
        rollState: { advantage: false, disadvantage: true },
      },
    };

    const result = rollInitiative(participants, mockDice);
    expect(result.scores["p1"]).toBe(5);
  });

  it("should cancel advantage and disadvantage", () => {
    (mockDice.roll as jest.Mock).mockReturnValue([10]);
    const participants: Record<string, ParticipantRollingInfo> = {
      p1: {
        id: "p1",
        initiative: 0,
        dexModifier: 10,
        rollState: { advantage: true, disadvantage: true },
      },
    };

    const result = rollInitiative(participants, mockDice);
    expect(result.scores["p1"]).toBe(10);
    expect(mockDice.roll).toHaveBeenCalledWith(20, 1);
  });

  it("should sort participants correctly (roll > dex)", () => {
    (mockDice.roll as jest.Mock)
      .mockReturnValueOnce([10]) // p1: 10 + 2 = 12
      .mockReturnValueOnce([12]); // p2: 12 + 0 = 12

    const participants: Record<string, ParticipantRollingInfo> = {
      p1: { id: "p1", initiative: 2, dexModifier: 10 },
      p2: { id: "p2", initiative: 0, dexModifier: 14 },
    };

    const result = rollInitiative(participants, mockDice);
    expect(result.order).toEqual(["p2", "p1"]); // Both 12, but p2 has dex 14 > p1 dex 10
  });
});
