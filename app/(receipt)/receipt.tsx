import { View, StyleSheet, Dimensions, Image } from "react-native";
import Label from "../components/label/label";
import Svg, { Path } from "react-native-svg";
import { ReceiptScratch } from "../components/icons/icons";

export default function ReceiptScreen() {
  return (
    <View style={receipt_style.main_container}>
      <View style={receipt_style.container}>
        <View
          style={{
            height: "70%",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <Image
            source={require("../../assets/bmoneyin.png")}
            style={{ width: 100, height: 100, marginTop: -50 }}
          />
          <Label
            label={"Money In"}
            style={{ fontSize: 20, fontWeight: "bold" }}
          />
          <Label size="small" label={"Allowance"} style={{ marginTop: 10 }} />
          <Label size="small" label={"Received via GCash"} />
          <View
            style={{
              width: "90%",
              marginTop: 30,
              display: "flex",
              paddingTop: 20,
              alignItems: "center",
              paddingBottom: 20,
              flexDirection: "row",
              borderTopWidth: 0.2,
              borderBottomWidth: 0.2,
              borderColor: "#00000050",
              justifyContent: "space-between",
            }}
          >
            <Label
              size="small"
              style={{ fontWeight: "bold" }}
              label={"Amount"}
            />
            <Label
              size="small"
              style={{ fontWeight: "bold" }}
              label={"200.00"}
            />
          </View>
          <View
            style={{
              width: "90%",
              display: "flex",
              paddingTop: 20,
              paddingBottom: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Label
              size="small"
              style={{ fontWeight: "bold" }}
              label={"Total Amount Received"}
            />
            <Label
              style={{ fontSize: 20, fontWeight: "bold" }}
              label={"200.00"}
            />
          </View>
        </View>
        <ReceiptScratch />
      </View>
    </View>
  );
}
const receipt_style = StyleSheet.create({
  main_container: {
    height: Dimensions.get("window").height,
    justifyContent: "space-between",
    backgroundColor: "#41a892ff",
  },
  container: {
    paddingTop: 80,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
