import { PaymentCategories } from "../components/payment-categories/payment-categories";
import { IncomeCategories } from "../components/income-categories/income-categories";
import TransactionHeader from "../components/transaction-header/transaction-header";
import BottomSheetDrawer from "../components/botton-sheet/bottom-sheet";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import TextInputField from "../components/text-input/text-input";
import DatePicker from "../components/date-picker/date-picker";
import TimePicker from "../components/time-picker/time-picker";
import { useBottomSheet } from "../hooks/bottom-sheet-hooks";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import ButtonField from "../components/button/button";
import React, { useCallback, useState } from "react";
import Label from "../components/label/label";
import { useFocusEffect } from "expo-router";
import {
  TransactionInterface,
  transactionDefault,
  PAYMENT_CATEGORY,
  INCOME_CATEGORY,
  TransactionType,
} from "../config";
import { ExpenceCategories } from "../components/expence-categories/expence-categories";

export default function TransactionScreen() {
  const [transactionDetails, setTransactionDetails] =
    useState<TransactionInterface>(transactionDefault);

  // Category List
  const Categories = useBottomSheet();

  // Payment Method List
  const PaymentMethod = useBottomSheet();

  // On Change Fields
  const onChangeFields = (data: TransactionInterface) => {
    setTransactionDetails({ ...transactionDetails, ...data });
  };

  // Reset transactionType every time the screen is focused
  useFocusEffect(
    useCallback(() => {
      setTransactionDetails(transactionDefault);
    }, [])
  );

  return (
    <View style={transaction_style.main_container}>
      <View style={transaction_style.container}>
        {/* TRANSACTION HEADER SELECTION */}
        <TransactionHeader
          transactionDetails={transactionDetails}
          setTransactionDetails={setTransactionDetails}
        />
        {/* TRANSACTION DETAILS */}
        {transactionDetails.transactionType !== undefined && (
          <View style={transaction_style.fields_container}>
            <View style={transaction_style.instruction_divider}>
              <Label
                size={"small"}
                style={{ fontSize: 12 }}
                label={"Transaction Details"}
              />
              <View style={transaction_style.intruction_line} />
            </View>
            {/* AMOUNT FIELD*/}
            <View style={transaction_style.amount_container}>
              <Label
                label={"PHP"} // TODO: DYNAMIC
                size={"medium"}
                style={{ fontSize: 24, fontWeight: "bold" }}
              />
              <TextInputField
                required
                placeHolder={"Amount"}
                keyboardType={"numeric"}
                style={{ width: "85%", fontSize: 18 }}
                value={transactionDetails.amount.toString()}
                onChange={(data) =>
                  onChangeFields({ ...transactionDetails, amount: data })
                }
              />
            </View>
            <View style={transaction_style.category_container}>
              {/* INCOME CATEGORY FIELD */}
              <TextInputField
                required
                readOnly
                value={
                  transactionDetails.categoryType
                    ? INCOME_CATEGORY[transactionDetails.categoryType]
                        .categoryName
                    : ""
                }
                placeHolder={`${
                  transactionDetails.transactionType ===
                  TransactionType.MONEY_IN
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
            {/* NOTE FIELD */}
            <TextInputField
              multiline
              placeHolder={"Enter Note"}
              style={{ fontSize: 18, height: 100, textAlignVertical: "top" }}
              value={transactionDetails.note}
              onChange={(data) =>
                onChangeFields({ ...transactionDetails, note: data })
              }
            />
            {/* DATE PICKER FIELD */}
            <DatePicker
              dateValue={transactionDetails.date}
              setDateValue={(data: Date) =>
                onChangeFields({ ...transactionDetails, date: data })
              }
            />
            {/* TIME PICKER FIELD */}
            <TimePicker
              timeValue={transactionDetails.time}
              setTimeValue={(data: Date) =>
                onChangeFields({ ...transactionDetails, time: data })
              }
            />
            {/* PAYMNET METHOD FIELD */}
            <View style={transaction_style.payment_container}>
              <TextInputField
                required
                readOnly
                value={
                  transactionDetails.paymentType
                    ? PAYMENT_CATEGORY[transactionDetails.paymentType]
                        .paymentName
                    : ""
                }
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
            <ButtonField
              label={
                transactionDetails.transactionType === TransactionType.MONEY_IN
                  ? `Add Income`
                  : `Add Expence`
              }
              size="medium"
              onPress={() => console.log(transactionDetails)}
            />
          </View>
        )}
        <BottomSheetDrawer
          openSheet={Categories.openBottomSheet}
          setOpenDrawer={Categories.setOpenBottomSheet}
          sheetTitle={
            transactionDetails.transactionType === TransactionType.MONEY_IN
              ? `Select Income Category`
              : `Select Expence Category`
          }
          children={
            transactionDetails.transactionType === TransactionType.MONEY_IN ? (
              <IncomeCategories
                Categories={Categories}
                onChangeFields={onChangeFields}
                transactionDetails={transactionDetails}
              />
            ) : (
              <ExpenceCategories />
            )
          }
        />
        <BottomSheetDrawer
          sheetTitle={"Select Payment Method"}
          openSheet={PaymentMethod.openBottomSheet}
          setOpenDrawer={PaymentMethod.setOpenBottomSheet}
          children={
            <PaymentCategories
              PaymentMethod={PaymentMethod}
              onChangeFields={onChangeFields}
              transactionDetails={transactionDetails}
            />
          }
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
  fields_container: {
    marginTop: 20,
    gap: 5,
  },
  instruction_divider: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  intruction_line: { height: 1, width: "70%", backgroundColor: "black" },
  amount_container: {
    gap: 5,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  category_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  payment_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottomSheetContainer: {
    backgroundColor: "white",
    padding: 20,
    height: 400,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  categoriesContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 2,
  },
});
