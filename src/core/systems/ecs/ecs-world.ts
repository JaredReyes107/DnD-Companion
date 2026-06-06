import { ComponentStore } from "./component-store";
import { EffectComponent } from "./effect-component";

export class ECSWorld {
  effects = new ComponentStore<EffectComponent>();
}
