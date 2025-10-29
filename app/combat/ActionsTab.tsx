import { useRouter } from "expo-router";
import { View, Text, Button } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Tab</Text>
      <Button title="Go to Settings" />
    </View>
  );
}
