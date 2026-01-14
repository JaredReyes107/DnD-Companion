import { View, Text, Button } from "react-native";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Tab</Text>
      <Button title="Go to Settings" />
    </View>
  );
};

export default HomeScreen;
