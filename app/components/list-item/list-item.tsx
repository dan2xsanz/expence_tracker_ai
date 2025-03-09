import { View, StyleSheet, TouchableOpacity } from "react-native";
import Label from "../label/label";
import React from "react";

const ListItem = () => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={list_item_style.main_container}>
        <View>
          <Label label={"Category Type"} size={"small"} />
          <Label label={"Transaction Note"} size={"note"} />
        </View>
        <Label label={"+100,000.00"} size={"small"} />
      </View>
    </TouchableOpacity>
  );
};

const list_item_style = StyleSheet.create({
  main_container: {
    width: "100%",
    height: 50,
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#36c4a50c",
    justifyContent: "space-between",
  },
});

export default ListItem;
