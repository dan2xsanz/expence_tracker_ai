import { Stack } from "expo-router";
import React from "react";

export default function CreateAccountLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="create" options={{ title: "Create Account" }} />
    </Stack>
  );
}
