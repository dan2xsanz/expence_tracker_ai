import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="exchange" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="transaction"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="plus" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="report"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="bar-chart" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
