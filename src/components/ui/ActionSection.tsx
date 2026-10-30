import React, { useMemo, useState } from "react";
import { View } from "react-native";
import { ThemedText } from "@/components/ui/ThemedText";
import { ActionElement } from "./ActionElement";
import { CostBoard } from "./CostBoard";
import { costChoiceLabel } from "./cost-choice-label";

import { Character } from "@/core/entities/character/Character";
import { ActionInstance } from "@/core/entities/actions/action-instance";
import { CostOption } from "@/core/entities/actions/cost-option";
import { ActionSlot } from "@/core/entities/combat/action-economy";
import {
  executeAction,
  isActionAvailable,
} from "@/core/systems/combat/action-execution/take-action";
import { buildResourceContext } from "@/core/rules/character/resource-max";
import {
  ResolvedCostChoice,
  resolveCostChoices,
} from "@/core/rules/costs/resolve-cost-choices";
import { splitActionCost } from "@/core/rules/costs/split-action-cost";
import { getLocalizedName } from "@/services/localization/localization-helper";
import { ui } from "@/services/localization/ui-localization-resolver";

import styles from "@/styles/combat/tab-actions";

type Props = {
  slot: ActionSlot;
  actions: ActionInstance[];
  character: Character;
  onUpdate: (updated: Character) => void;
};

type Pending = {
  action: ActionInstance;
  options: CostOption[];
  choices: ResolvedCostChoice[];
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
  const [pending, setPending] = useState<Pending | null>(null);

  if (actions.length === 0) return null;

  const run = (action: ActionInstance, choice?: ResolvedCostChoice) =>
    executeAction(action, {
      character,
      dispatch: onUpdate,
      payment: choice
        ? { optionId: choice.optionId, params: choice.params }
        : undefined,
    });

  const handlePress = (action: ActionInstance) => {
    const { options } = splitActionCost(action);
    const choices = resolveCostChoices(character, options, resourceCtx);
    const trivial =
      choices.length <= 1 && choices.every((c) => c.ranges.length === 0);
    if (trivial) run(action, choices[0]);
    else setPending({ action, options, choices });
  };

  const handlePick = (key: string) => {
    const choice = pending?.choices.find((c) => c.key === key);
    // Range choices get a stepper in the next commit; until then they stay disabled.
    if (!pending || !choice || !choice.affordable || choice.ranges.length > 0)
      return;
    setPending(null);
    run(pending.action, choice);
  };

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
        visible={pending !== null}
        title={pending ? getLocalizedName("actions", pending.action.id) : ""}
        entries={(pending?.choices ?? []).map((c) => ({
          key: c.key,
          label: costChoiceLabel(
            character,
            resourceCtx,
            c,
            pending!.options.find((o) => o.id === c.optionId)!,
          ),
          isAvailable: c.affordable && c.ranges.length === 0,
        }))}
        onPick={handlePick}
        onClose={() => setPending(null)}
      />
    </View>
  );
};
