import React, { Fragment } from "react";
import { TouchableOpacity, View, StyleSheet, Alert } from "react-native";
import Label from "../label/label";
import {
  CalculatorIcon,
  ChartIcon,
  CreditScore,
  FamilyExpense,
  SavingIcon,
} from "../icons/icons";

export const BmoTools = () => {
  // ON CLICK TOOLS
  const onClickButtonTools = () => {
    Alert.alert(
      "Coming Soon",
      "This feature is not available yet. Stay tuned for updates!"
    );
  };

  return (
    <Fragment>
      <Label label={"Tools"} style={tools_style.tools_label_style} />
      <View style={tools_style.tools_container}>
        <TouchableOpacity
          onPress={onClickButtonTools}
          style={tools_style.tools_button_style}
        >
          <SavingIcon />
          <Label label={"Savings"} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onClickButtonTools}
          style={tools_style.tools_button_style}
        >
          <ChartIcon />
          <Label label={"Budget"} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onClickButtonTools}
          style={tools_style.tools_button_style}
        >
          <CalculatorIcon />
          <Label label={"Calculator"} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onClickButtonTools}
          style={tools_style.tools_button_style}
        >
          <FamilyExpense />
          <Label label={"Family"} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onClickButtonTools}
          style={tools_style.tools_button_style}
        >
          <CreditScore />
          <Label label={"Score"} />
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

export const tools_style = StyleSheet.create({
  tools_label_style: {
    fontSize: 15,
    marginTop: 18,
    marginBottom: 5,
  },
  tools_container: {
    marginTop: 10,
    width: "100%",
    height: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tools_button_style: {
    width: 65,
    height: 65,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
