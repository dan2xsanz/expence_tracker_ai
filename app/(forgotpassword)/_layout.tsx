import { Stack } from "expo-router";
import React from "react";

export default function ForgotPasswordLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="forgotpassword"
        options={{ title: "Forgot Password" }}
      />
    </Stack>
  );
}
