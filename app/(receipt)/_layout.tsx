import { Stack } from "expo-router";
import React from "react";
import { Dimensions } from "react-native";

export default function Receipt() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          height: Dimensions.get("window").height,
        },
      }}
    >
      <Stack.Screen name="receipt" options={{ title: "" }} />
    </Stack>
  );
}
