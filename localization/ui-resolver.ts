import { es } from "./ui/es-ui";
import { en } from "./ui/en-ui";

type UILocale = {
  [key: string]: string | UILocale;
};

const uiDictionary: Record<string, UILocale> = { es, en };
//TODO: Adapt this to get the selected language
const uiLocale = "es";

export function ui(key: string): string {
  const path = key.split(".");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let node: any = uiDictionary[uiLocale];

  for (const part of path) {
    if (!node?.[part]) return key;
    node = node[part];
  }

  return typeof node === "string" ? node : key;
}
