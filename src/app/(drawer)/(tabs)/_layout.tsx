import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.gray[600],
          borderTopWidth: 0,
          minHeight: 60,
        },
        tabBarItemStyle: {
          paddingBottom: 16,
          paddingTop: 10,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.blue[600],
        tabBarInactiveTintColor: colors.gray[400],
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="email" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="meeting"
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="videocam" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
