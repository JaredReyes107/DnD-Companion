import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { GameLocale } from "@/services/localization/game-localization.types";

const LOCALE_KEY = "locale";

type LocaleStore = {
  locale: GameLocale;
  setLocale: (locale: GameLocale) => void;
};

export const useLocaleStore = create<LocaleStore>((set) => ({
  locale: "en", // overwritten by hydrateLocale() below once storage is read
  setLocale: (locale) => {
    set({ locale });
    AsyncStorage.setItem(LOCALE_KEY, locale).catch((error) =>
      console.error("Failed to persist locale:", error),
    );
  },
}));

/** Call once at app startup (e.g. RootLayout) to restore the saved locale. */
export async function hydrateLocale(): Promise<void> {
  try {
    const stored = await AsyncStorage.getItem(LOCALE_KEY);
    if (stored === "en" || stored === "es") {
      useLocaleStore.setState({ locale: stored });
    }
  } catch (error) {
    console.error("Failed to hydrate locale:", error);
  }
}
