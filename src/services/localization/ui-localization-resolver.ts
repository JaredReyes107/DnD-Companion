import { es } from "./ui/es-ui";
import { en } from "./ui/en-ui";
import { useLocaleStore } from "@/store/localizationStore";

type UILocale = { [key: string]: string | UILocale };
const uiDictionary: Record<string, UILocale> = { es, en };

export function ui(key: string): string {
  const path = key.split(".");
  const locale = useLocaleStore.getState().locale;
  let node: UILocale | string | undefined = uiDictionary[locale];

  for (const part of path) {
    if (typeof node !== "object" || !node?.[part]) return key;
    node = node[part];
  }

  return typeof node === "string" ? node : key;
}
