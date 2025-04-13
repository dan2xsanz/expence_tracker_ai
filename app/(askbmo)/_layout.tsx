import { Stack } from "expo-router";
import React, { useEffect } from "react";
import { Dimensions } from "react-native";

export default function AskBmo() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          height: Dimensions.get("window").height,
        },
      }}
    >
      <Stack.Screen name="askbmo" options={{ title: "Ask BMO" }} />
    </Stack>
  );
}
