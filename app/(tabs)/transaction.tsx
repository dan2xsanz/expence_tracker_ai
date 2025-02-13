import { View, Text, StyleSheet } from "react-native";
import Label from "../components/label/label";

export default function TransactionScreen() {
  return (
    <View style={transaction_style.main_container}>
      <View style={transaction_style.container}>
        <View style={transaction_style.header_container}>
          <Label
            label={"Transaction"}
            size={"medium"}
            style={{ fontSize: 20 }}
          />
        </View>
      </View>
    </View>
  );
}

const transaction_style = StyleSheet.create({
  main_container: {
    height: "100%",
    paddingTop: 5,
    justifyContent: "space-between",
  },
  container: {
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  header_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
