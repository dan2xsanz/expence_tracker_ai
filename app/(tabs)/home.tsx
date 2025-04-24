import { View, Image, Dimensions, StyleSheet, ScrollView } from "react-native";
import { BmoInsights } from "../components/bmo-insights/bmo-insights";
import { BmoAdvices } from "../components/bmo-advice/bmo-advice";
import { BmoTools } from "../components/bmo-tools/bmo-tools";
import { BmoTap } from "../components/bmo-tap/bmo-tap";
import Label from "../components/label/label";
import React, { useState } from "react";
import { Loading } from "../components/loading/loading";

export default function HomeScreen() {
  // SCREEN LOADING HOOK
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <View style={home_style.main_container}>
      <Loading loading={loading} />
      <View style={home_style.container}>
        <View style={home_style.header_container}>
          <Label label={"Home"} size={"medium"} style={{ fontSize: 20 }} />
        </View>
        <View style={{ marginTop: 10 }}>
          <Label
            label={"Hi Dan Lester!"}
            size={"large"}
            style={{ fontWeight: 500, fontSize: 40 }}
          />
        </View>

        <View style={home_style.bmo_clickable_container}>
          <View>
            <Label
              size="large"
              style={{ fontSize: 17, flexWrap: "wrap", marginBottom: 5 }}
              label="Welcome! I'm your BMO. "
            />
            <Label
              size="medium"
              style={{ fontSize: 13, flexWrap: "wrap" }}
              label="Your new expense tracker buddy."
            />
            <Label
              size="medium"
              style={{ fontSize: 13, flexWrap: "wrap" }}
              label="Let's track your daily expense with me."
            />
          </View>
          <Image
            source={require("../../assets/bmoskate.png")}
            style={{ width: 150, height: 150 }}
          />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ height: Dimensions.get("window").height - 260 }}
        >
          <BmoInsights setLoading={setLoading} />
          <BmoAdvices />
          <BmoTools />
          <BmoTap />
        </ScrollView>
      </View>
    </View>
  );
}

export const home_style = StyleSheet.create({
  main_container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    paddingTop: 5,
    backgroundColor: "white",
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
  bmo_clickable_container: {
    padding: 10,
    marginTop: 10,
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "#36c4a571",
  },
});
