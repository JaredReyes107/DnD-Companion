import {
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useLocalSearchParams, Tabs } from "expo-router";
import React from "react";

import { CharacterProvider } from "@/utils/character-provider";
import { useThemeColor } from "@/hooks/useThemeColor";
import { ui } from "@/services/localization/ui-localization-resolver";

const TabBarIcon = <T extends string>({
  IconComponent,
  name,
  color,
}: {
  IconComponent: React.ElementType;
  name: T;
  color: string;
}) => (
  <IconComponent
    name={name}
    size={28}
    style={{ marginBottom: -3 }}
    color={color}
  />
);

const CharacterSheetIcon = ({
  color,
  focused,
}: {
  color: string;
  focused: boolean;
}) => (
  <TabBarIcon
    IconComponent={MaterialCommunityIcons}
    name={focused ? "chart-box" : "chart-box-outline"}
    color={color}
  />
);

const StatsIcon = ({ color, focused }: { color: string; focused: boolean }) => (
  <TabBarIcon
    IconComponent={FontAwesome6}
    name={focused ? "heart-pulse" : "heart"}
    color={color}
  />
);

const ActionsIcon = ({
  color,
  focused,
}: {
  color: string;
  focused: boolean;
}) => (
  <TabBarIcon
    IconComponent={MaterialCommunityIcons}
    name={focused ? "shield-sword" : "shield-sword-outline"}
    color={color}
  />
);

const ResourcesIcon = ({
  color,
  focused,
}: {
  color: string;
  focused: boolean;
}) => (
  <TabBarIcon
    IconComponent={Ionicons}
    name={focused ? "book" : "book-outline"}
    color={color}
  />
);

const EquipmentIcon = ({
  color,
  focused,
}: {
  color: string;
  focused: boolean;
}) => (
  <TabBarIcon
    IconComponent={MaterialCommunityIcons}
    name={focused ? "bag-personal" : "bag-personal-outline"}
    color={color}
  />
);

const TabLayout = () => {
  const { characterId } = useLocalSearchParams<{ characterId: string }>();
  const tint = useThemeColor({}, "tint");
  const tabBarBackground = useThemeColor({}, "tabBarBackground");

  return (
    <CharacterProvider initialCharacterId={characterId}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: tint,
          tabBarStyle: {
            backgroundColor: tabBarBackground,
            borderTopColor: "transparent",
          },
          headerShown: false,
          lazy: true,
        }}
      >
        <Tabs.Screen
          name="tab-character-sheet"
          options={{
            title: ui("combatTabs.sheet"),
            tabBarIcon: CharacterSheetIcon,
          }}
        />
        <Tabs.Screen
          name="tab-stats"
          options={{
            title: ui("combatTabs.stats"),
            tabBarIcon: StatsIcon,
          }}
        />
        <Tabs.Screen
          name="tab-actions"
          options={{
            title: ui("combatTabs.actions"),
            tabBarIcon: ActionsIcon,
          }}
        />
        <Tabs.Screen
          name="tab-resources"
          options={{
            title: ui("combatTabs.resources"),
            tabBarIcon: ResourcesIcon,
          }}
        />
        <Tabs.Screen
          name="tab-equipment"
          options={{
            title: ui("combatTabs.equipment"),
            tabBarIcon: EquipmentIcon,
          }}
        />
      </Tabs>
    </CharacterProvider>
  );
};

export default TabLayout;
