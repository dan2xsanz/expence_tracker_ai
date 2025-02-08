import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Button } from "react-native";

export default function LoginScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Button title="Go to Home" onPress={() => router.push("/home")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
