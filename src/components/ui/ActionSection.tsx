import React, { useMemo, useState } from "react";
import { View } from "react-native";
import { ThemedText } from "@/components/ui/ThemedText";
import { ActionElement } from "./ActionElement";
import { CostBoard, CostStepper } from "./CostBoard";
import { costChoiceLabel } from "./cost-choice-label";

import { Character } from "@/core/entities/character/Character";
import { ActionInstance } from "@/core/entities/actions/action-instance";
import { CostOption, PaymentChoice } from "@/core/entities/actions/cost-option";
import { ActionSlot } from "@/core/entities/combat/action-economy";
import {
  executeAction,
  isActionAvailable,
} from "@/core/systems/combat/action-execution/take-action";
import { buildResourceContext } from "@/core/rules/character/resource-max";
import {
  defaultRangeValues,
  ResolvedCostChoice,
  resolveCostChoices,
  withRangeValues,
} from "@/core/rules/costs/resolve-cost-choices";
import { validatePayment } from "@/core/rules/costs/payment";
import { getLocalizedName } from "@/services/localization/localization-helper";
import { ui } from "@/services/localization/ui-localization-resolver";

import styles from "@/styles/combat/tab-actions";

type Props = {
  slot: ActionSlot;
  actions: ActionInstance[];
  character: Character;
  onUpdate: (updated: Character) => void;
};

type Board = {
  action: ActionInstance;
  options: CostOption[];
  choices: ResolvedCostChoice[];
};
type Stepping = {
  action: ActionInstance;
  option: CostOption;
  choice: ResolvedCostChoice;
  values: Record<string, number>;
};

export const ActionSection = ({
  slot,
  actions,
  character,
  onUpdate,
}: Props) => {
  const resourceCtx = useMemo(
    () => buildResourceContext(character),
    [character],
  );
  const [board, setBoard] = useState<Board | null>(null);
  const [stepping, setStepping] = useState<Stepping | null>(null);

  if (actions.length === 0) return null;

  const close = () => {
    setBoard(null);
    setStepping(null);
  };

  const run = (action: ActionInstance, payment?: PaymentChoice) => {
    const result = executeAction(action, {
      character,
      dispatch: onUpdate,
      payment,
    });
    if (!result.ok)
      console.warn(`[actions] "${action.id}" blocked:`, result.failure);
  };

  // A choice with a range needs the stepper first; everything else pays right away.
  const begin = (
    action: ActionInstance,
    options: CostOption[],
    choice: ResolvedCostChoice,
  ) => {
    if (choice.ranges.length > 0) {
      const option = options.find((o) => o.id === choice.optionId)!;
      setStepping({
        action,
        option,
        choice,
        values: defaultRangeValues(choice),
      });
      return;
    }
    close();
    run(action, { optionId: choice.optionId, params: choice.params });
  };

  const handlePress = (action: ActionInstance) => {
    const options = action.costOptions ?? [];
    if (options.length === 0) return run(action);
    const choices = resolveCostChoices(character, options, resourceCtx);
    if (choices.length === 0) return; // nothing can pay; the button is already disabled
    if (choices.length === 1) return begin(action, options, choices[0]);
    setBoard({ action, options, choices });
  };

  const handlePick = (key: string) => {
    const choice = board?.choices.find((c) => c.key === key);
    if (board && choice?.affordable) begin(board.action, board.options, choice);
  };

  let stepper: CostStepper | null = null;
  if (stepping) {
    const params = withRangeValues(stepping.choice, stepping.values);
    stepper = {
      rows: stepping.choice.ranges.map((r) => ({
        id: r.id,
        label: getLocalizedName(
          "costOptions",
          `${stepping.option.id}.${r.id}`,
          "",
        ),
        value: stepping.values[r.id],
        min: r.min,
        max: r.max,
      })),
      canConfirm: validatePayment(
        character,
        stepping.option,
        params,
        resourceCtx,
      ).ok,
      onChange: (id, value) =>
        setStepping((s) =>
          s ? { ...s, values: { ...s.values, [id]: value } } : s,
        ),
      onConfirm: () => {
        close();
        run(stepping.action, { optionId: stepping.choice.optionId, params });
      },
      onBack: () => setStepping(null), // back to the board when there is one
    };
  }

  const titleAction = stepping?.action ?? board?.action;

  return (
    <View style={styles.actionBoardRow}>
      <ThemedText style={styles.actionBoardRowHeader}>
        {ui("actionSection." + slot)}
      </ThemedText>
      <View style={styles.actionBoardRowContent}>
        {actions.map((action) => (
          <ActionElement
            key={action.id}
            label={getLocalizedName("actions", action.id)}
            isAvailable={isActionAvailable(character, action, resourceCtx)}
            onUse={() => handlePress(action)}
          />
        ))}
      </View>

      <CostBoard
        visible={board !== null || stepping !== null}
        title={titleAction ? getLocalizedName("actions", titleAction.id) : ""}
        entries={(board?.choices ?? []).map((c) => ({
          key: c.key,
          label: costChoiceLabel(
            character,
            resourceCtx,
            c,
            board!.options.find((o) => o.id === c.optionId)!,
          ),
          isAvailable: c.affordable,
        }))}
        stepper={stepper}
        onPick={handlePick}
        onClose={close}
      />
    </View>
  );
};
