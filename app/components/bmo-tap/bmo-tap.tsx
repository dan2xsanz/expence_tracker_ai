import { View, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Label from "../label/label";
import React from "react";

export const BmoTap = () => {
  // EXPO ROUTER
  const router = useRouter();

  return (
    <View>
      <Label
        label={"Ask BMO (Tap me!)"}
        style={{
          fontSize: 15,
          marginTop: 28,
        }}
      />
      <TouchableOpacity onPress={() => router.push("/(askbmo)/askbmo")}>
        <View
          style={{
            marginTop: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: "#1d816cb4",
            padding: 10,
            paddingBottom: 0,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        >
          <Image
            source={require("../../../assets/bmosaid.jpg")}
            style={{
              width: "100%",
              height: 130,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
