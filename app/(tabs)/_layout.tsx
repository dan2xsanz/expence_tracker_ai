import { Tabs } from "expo-router";
import { Image } from "react-native";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarStyle: {
          // display: "none",
          paddingTop: 10,
          height: 60,
          justifyContent: "center", // Centers content vertically
          alignItems: "center", // Centers content horizontally
          backgroundColor: "#41a892ff",
        },
        tabBarItemStyle: {
          justifyContent: "center", // Ensures icon is centered vertically
          alignItems: "center", // Ensures icon is centered horizontally
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/triangle.png")}
              style={{
                width: 40,
                height: 40,
              }}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/circ1.png")}
              style={{
                width: 40,
                height: 40,
              }}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="transaction"
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/plus.png")}
              style={{
                width: 40,
                height: 40,
              }}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="report"
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/circ2.png")}
              style={{
                width: 40,
                height: 40,
              }}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/square.png")}
              style={{
                width: 40,
                height: 40,
              }}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
    </Tabs>
  );
}
