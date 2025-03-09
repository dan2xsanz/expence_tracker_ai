import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

interface TagButtonInterface {
  icon?: React.JSX.Element;
  tagText: string;
  disabled?: boolean;
  onPress?: VoidFunction;
}

const TagButton = ({
  icon,
  tagText,
  disabled,
  onPress,
}: TagButtonInterface) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <View style={tagButoon_style.container}>
        <View pointerEvents="none">{icon}</View>
        <Text
          disabled
          style={{ fontSize: 12, fontWeight: "bold", textAlign: "center" }}
        >
          {tagText}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const tagButoon_style = StyleSheet.create({
  container: {
    width: 80,
    paddingTop: 10,
    paddingBottom: 2,
    borderRadius: 5,
    alignItems: "center",
  },
});

export default TagButton;
