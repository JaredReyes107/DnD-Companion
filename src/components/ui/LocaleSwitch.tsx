import { View, Switch } from "react-native";
import styles from "@/styles/generic.styles"; // adjust to wherever fits
import { useLocaleStore } from "@/store/localizationStore";
import { ThemedText } from "./ThemedText";

const LocaleSwitch = () => {
  const locale = useLocaleStore((s) => s.locale);
  const setLocale = useLocaleStore((s) => s.setLocale);

  return (
    <View style={styles.localeSwitchContainer}>
      <ThemedText
        style={locale === "en" ? styles.localeLabelActive : styles.localeLabel}
      >
        EN
      </ThemedText>
      <Switch
        value={locale === "es"}
        onValueChange={(isEs) => setLocale(isEs ? "es" : "en")}
      />
      <ThemedText
        style={locale === "es" ? styles.localeLabelActive : styles.localeLabel}
      >
        ES
      </ThemedText>
    </View>
  );
};

export default LocaleSwitch;
