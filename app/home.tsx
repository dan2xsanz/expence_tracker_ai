import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Homecreen() {
  
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Go to Report" onPress={() => router.push("/report")} />
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
