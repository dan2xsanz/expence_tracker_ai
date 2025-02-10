import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Button } from "react-native";
import { Label, MenuIcon, NotificationIcon } from "./components";

export default function Homecreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <MenuIcon />
        <Label label={"Home"} size={"medium"} style={{ fontSize: 20 }} />
        <NotificationIcon />
      </View>
      <View style={{ marginTop: 40 }}>
        <Label
          label={"Hi Dan Lester!"}
          size={"large"}
          style={{ fontWeight: 500 , fontSize: 40}}
        />
        <Label label={"Good morning"} size={"small"} />
      </View>
      {/* <Button title="Go to Report" onPress={() => router.push("/report")} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
