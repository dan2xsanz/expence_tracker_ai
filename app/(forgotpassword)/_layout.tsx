import { Stack } from "expo-router";
import React from "react";

export default function forgotPasswordLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="forgot" options={{ title: "Forgot Password" }} />

    </Stack>
  );
}