import {
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

import { CharacterProvider } from "@/lib/utilities/character-provider";
import { useThemeColor } from "@/hooks/useThemeColor";

const TabLayout = () => {
  const tint = useThemeColor({}, "tint");
  const tabBarBackground = useThemeColor({}, "tabBarBackground");

  return (
    <CharacterProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: tint,
          tabBarStyle: {
            backgroundColor: tabBarBackground,
            borderTopColor: "transparent",
          },
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="tab-actions"
          options={{
            title: "Acciones",
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name={focused ? "shield-sword" : "shield-sword-outline"}
                size={28}
                style={{ marginBottom: -3 }}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="index"
          options={{
            title: "Vida",
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome6
                name={focused ? "heart-pulse" : "heart"}
                size={28}
                style={{ marginBottom: -3 }}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="tab-resources"
          options={{
            title: "Recursos",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "book" : "book-outline"}
                size={28}
                style={{ marginBottom: -3 }}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </CharacterProvider>
  );
};

export default TabLayout;
