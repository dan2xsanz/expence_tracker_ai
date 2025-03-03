import React from "react";

import { View, StyleSheet } from "react-native";
import { BottomSheet } from "@rneui/themed";
import {
  CloseIcon,
  ElypsisIcon,
  GovernmentIcon,
  InsuranceIcon,
  PensionIcon,
  RemittanceIcon,
  SackMoneyIcon,
  SavingIcon,
  StocksIcon
} from "../icons/icons";
import TagButton from "../tag-button/tag-button";
import Label from "../label/label";

interface BottomSheetDrawerProps {
  sheetTitle: string;
  openSheet: boolean;
  setOpenDrawer: (data: boolean) => void;
  children?: React.JSX.Element;
}

const BottomSheetDrawer = ({
  children,
  openSheet,
  sheetTitle,
  setOpenDrawer
}: BottomSheetDrawerProps) => {
  return (
    <BottomSheet
      isVisible={openSheet}
      modalProps={{ transparent: true, animationType: "slide" }}
      backdropStyle={{ backgroundColor: "transparent" }}
      onBackdropPress={() => setOpenDrawer(false)}
    >
      <View style={bottomSheet_style.bottomSheetContainer}>
        <View style={bottomSheet_style.closeButtonContainer}>
          <Label label={sheetTitle} size={"small"} />
          <CloseIcon onPress={() => setOpenDrawer(false)} />
        </View>
        {children}
      </View>
    </BottomSheet>
  );
};

export default BottomSheetDrawer;

const bottomSheet_style = StyleSheet.create({
  bottomSheetContainer: {
    backgroundColor: "white",
    padding: 20,
    height: 400,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  closeButtonContainer: {
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});
