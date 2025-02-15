import TransactionHeader from "../components/transaction-components/transaction-header";
import BottomSheetDrawer from "../components/botton-sheet/bottom-sheet";

import { View, StyleSheet, TouchableOpacity } from "react-native";
import TextInputField from "../components/text-input/text-input";
import DatePicker from "../components/date-picker/date-picker";
import TimePicker from "../components/time-picker/time-picker";
import { useBottomSheet } from "../hooks/bottom-sheet-hooks";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import React, { useCallback, useState } from "react";
import Label from "../components/label/label";
import { useFocusEffect } from "expo-router";
import { TransactionType } from "../config";

export default function TransactionScreen() {
  // Transaction type enums
  const [transactionType, setTransactionType] = useState<
    TransactionType | undefined
  >();

  const Categories = useBottomSheet();

  const PaymentMethod = useBottomSheet();

  // Reset transactionType every time the screen is focused
  useFocusEffect(
    useCallback(() => {
      setTransactionType(undefined);
    }, [])
  );

  return (
    <View style={transaction_style.main_container}>
      <View style={transaction_style.container}>
        <TransactionHeader
          transactionType={transactionType}
          setTransactionType={setTransactionType}
        />
        {transactionType !== undefined && (
          <View
            style={{
              marginTop: 20,
              gap: 5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <Label
                label={"Transaction Details"}
                size={"small"}
                style={{ fontSize: 12 }}
              />
              <View
                style={{ height: 1, width: "70%", backgroundColor: "black" }}
              />
            </View>
            <View
              style={{
                gap: 5,
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Label
                label={"PHP"} // TODO: DYNAMIC
                size={"medium"}
                style={{ fontSize: 24, fontWeight: "bold" }}
              />
              <TextInputField
                required
                keyboardType={"numeric"}
                placeHolder={"Amount"}
                style={{ width: "85%", fontSize: 18 }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TextInputField
                required
                readOnly
                placeHolder={`${
                  transactionType === TransactionType.MONEY_IN
                    ? `Income Category`
                    : `Expence Category`
                }`}
                style={{ fontSize: 18, width: "90%" }}
              />
              {!Categories.openBottomSheet ? (
                <TouchableOpacity
                  onPress={() => Categories.setOpenBottomSheet(true)}
                >
                  <FontAwesome size={50} name="angle-down" color={"#216363"} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => Categories.setOpenBottomSheet(true)}
                >
                  <FontAwesome size={50} name="angle-up" color={"#216363"} />
                </TouchableOpacity>
              )}
            </View>
            <TextInputField
              multiline
              placeHolder={"Enter Note"}
              style={{ fontSize: 18, height: 100, textAlignVertical: "top" }}
            />
            <DatePicker />
            <TimePicker />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TextInputField
                required
                readOnly
                placeHolder={`Pament Method`}
                style={{ fontSize: 18, width: "90%" }}
              />
              {!PaymentMethod.openBottomSheet ? (
                <TouchableOpacity
                  onPress={() => PaymentMethod.setOpenBottomSheet(true)}
                >
                  <FontAwesome size={50} name="angle-down" color={"#216363"} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => PaymentMethod.setOpenBottomSheet(true)}
                >
                  <FontAwesome size={50} name="angle-up" color={"#216363"} />
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}
        <BottomSheetDrawer
          openSheet={Categories.openBottomSheet}
          setOpenDrawer={Categories.setOpenBottomSheet}
        />
        <BottomSheetDrawer
          openSheet={PaymentMethod.openBottomSheet}
          setOpenDrawer={PaymentMethod.setOpenBottomSheet}
        />
      </View>
    </View>
  );
}

const transaction_style = StyleSheet.create({
  main_container: {
    height: "100%",
    paddingTop: 5,
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  container: {
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  bottomSheetContainer: {
    backgroundColor: "white",
    padding: 20,
    height: 400,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
