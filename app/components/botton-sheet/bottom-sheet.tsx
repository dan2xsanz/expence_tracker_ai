import React from "react";

import { View, StyleSheet } from "react-native";
import { BottomSheet } from "@rneui/themed";
import Label from "../label/label";

interface BottomSheetDrawerProps {
  openSheet: boolean;
  setOpenDrawer: (data: boolean) => void;
}

const BottomSheetDrawer = ({
  openSheet,
  setOpenDrawer,
}: BottomSheetDrawerProps) => {
  return (
    <BottomSheet
      isVisible={openSheet}
      modalProps={{ transparent: true, animationType: "slide" }}
      backdropStyle={{ backgroundColor: "transparent" }}
      onBackdropPress={() => setOpenDrawer(false)}
    >
      <View style={transaction_style.bottomSheetContainer}>
        <Label
          label={"PHP"} // TODO: DYNAMIC
          size={"medium"}
          style={{ fontSize: 20, fontWeight: "bold" }}
        />
      </View>
    </BottomSheet>
  );
};

export default BottomSheetDrawer;

const transaction_style = StyleSheet.create({
  bottomSheetContainer: {
    backgroundColor: "white",
    padding: 20,
    height: 400,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
