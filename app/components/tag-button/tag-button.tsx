import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SackMoneyIcon } from "../icons/icons";

interface TagButtonInterface {
  icon?: React.JSX.Element;
  tagText: string;
  disabled?: boolean;
  onPress?: VoidFunction;
}

const TagButton = ({ icon, tagText, disabled }: TagButtonInterface) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={() => {}}>
      <View style={tagButoon_style.container}>
        {icon}
        <Text style={{ fontSize: 12, fontWeight: "bold", textAlign: "center" }}>
          {tagText}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TagButton;

const tagButoon_style = StyleSheet.create({
  container: {
    width: 80,
    paddingTop: 10,
    paddingBottom: 2,
    borderRadius: 5,
    alignItems: "center"
  }
});
