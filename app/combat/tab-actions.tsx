import { ThemedView } from "@/components/ThemedView";
import { Text, Button } from "react-native";

const HomeScreen = () => {
  return (
    <ThemedView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>Home Tab</Text>
      <Button title="Go to Settings" />
    </ThemedView>
  );
};

export default HomeScreen;
