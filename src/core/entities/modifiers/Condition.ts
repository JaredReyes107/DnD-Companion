import { Predicate } from "@/core/entities/rules/predicate/predicate";

/** Alias kept so existing `condition?: Condition` fields keep compiling.
 *  New code should import Predicate directly. */
export type Condition = Predicate;
