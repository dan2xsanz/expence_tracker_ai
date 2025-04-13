import { View, Dimensions, Image } from "react-native";
import Label from "../label/label";
import React from "react";

interface LoadingInterface {
  loading: boolean;
}

export const Loading = ({ loading }: LoadingInterface) => {
  return (
    loading && (
      <View
        style={{
          top: 0,
          left: 0,
          zIndex: 999,
          alignItems: "center",
          position: "absolute",
          justifyContent: "center",
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
          backgroundColor: "rgba(255, 255, 255, 0.418)",
        }}
      >
        <Image
          source={require("../../../assets/bmoskate.png")}
          style={{ width: 80, height: 80, opacity: 1, marginTop: -200 }}
        />
        <Label label={"Loading..."} size={"small"} />
      </View>
    )
  );
};
