import { NotificationIcon } from "../components/icons/icons";
import { View, StyleSheet, Image } from "react-native";
import Label from "../components/label/label";
import { useRouter } from "expo-router";
import React from "react";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={home_style.main_container}>
      <View style={home_style.container}>
        <View style={home_style.header_container}>
          <Label label={"Home"} size={"medium"} style={{ fontSize: 20 }} />
          <NotificationIcon />
        </View>
        <View style={{ marginTop: 40 }}>
          <Label
            label={"Hi Dan Lester!"}
            size={"large"}
            style={{ fontWeight: 500, fontSize: 40 }}
          />
          <Label label={"Good Morning..."} size={"small"} />
          <View style={home_style.rectangle_container}>
            <View>
              <Label label={"Welcome!"} size={"medium"} />
              <Label
                size={"small"}
                style={{ fontSize: 13 }}
                label={"Let's track your Expences with me BMO."}
              />
            </View>
            <View>
              <Image
                source={require("../../assets/bmoskate.png")}
                style={{ width: 150, height: 150, marginLeft: -5 }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export const home_style = StyleSheet.create({
  main_container: {
    height: "100%",
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
  rectangle_container: {
    height: 100,
    padding: 5,
    marginTop: 10,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 20,
    elevation: 100,
    backgroundColor: "#36c4a550",
    shadowColor: "black",
    shadowOpacity: 0.5,
  },
});
