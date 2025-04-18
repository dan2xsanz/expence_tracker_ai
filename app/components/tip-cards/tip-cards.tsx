import React from "react";
import { Dimensions, View } from "react-native";
import Label from "../label/label";

interface TipCardsInterface {
  title: string;
  tip: string;
}

export const TipCards = ({ title, tip }: TipCardsInterface) => {
  return (
    <View
      style={{
        justifyContent: "flex-start",
        padding: 10,
        width: Dimensions.get("window").width - 40,
        borderWidth: 0.8,
        borderRadius: 10,
        backgroundColor: "#36c4a571",
        marginRight: 10,
      }}
    >
      <Label label={title} style={{ fontSize: 20, fontWeight: 800 }} />
      <Label label={tip} style={{ fontSize: 15, marginTop: 2 }} />
    </View>
  );
};
