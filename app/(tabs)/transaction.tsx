import ExpenceCategories from "../components/expence-categories/expence-categories";
import PaymentCategories from "../components/payment-categories/payment-categories";
import TransactionHeader from "../components/transaction-header/transaction-header";
import IncomeCategories from "../components/income-categories/income-categories";
import BottomSheetDrawer from "../components/botton-sheet/bottom-sheet";
import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
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
  EXPENCE_CATEGORY,
} from "../config";
import { createTransaction } from "../operations";
import { Moment } from "moment";

export default function TransactionScreen() {
  // Transaction Details State Container
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

  const onClickAddTransaction = (data: TransactionInterface) => {
    if (
      data.amountValue === undefined ||
      data.paymentType === undefined ||
      data.categoryType === undefined
    ) {
      return Alert.alert("Error", "Please input value for required fields!");
    } else {
      createTransaction({ data, setTransactionDetails });
    }
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
        <View style={transaction_style.header_container}>
          <Label
            label={"Transaction"}
            size={"medium"}
            style={{ fontSize: 20 }}
          />
        </View>
        {/* TRANSACTION HEADER SELECTION */}
        <TransactionHeader
          titleDisplay
          transactionDetails={transactionDetails.transactionType}
          setTransactionDetails={(data) =>
            setTransactionDetails({
              ...transactionDetails,
              transactionType: data,
            })
          }
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
                value={transactionDetails.amountValue?.toString()}
                onChange={(data) =>
                  onChangeFields({
                    ...transactionDetails,
                    amountValue: data,
                  })
                }
              />
            </View>
            <View style={transaction_style.category_container}>
              {/* INCOME CATEGORY FIELD */}
              <TouchableOpacity
                onPress={() => Categories.setOpenBottomSheet(true)}
                style={{ width: "90%" }}
              >
                <TextInputField
                  required
                  readOnly
                  style={{ fontSize: 18 }}
                  value={
                    transactionDetails.categoryType !== undefined
                      ? transactionDetails.transactionType ===
                        TransactionType.MONEY_IN
                        ? INCOME_CATEGORY[transactionDetails.categoryType]
                            .categoryName
                        : EXPENCE_CATEGORY[transactionDetails.categoryType]
                            .expenceName
                      : ""
                  }
                  placeHolder={`${
                    transactionDetails.transactionType ===
                    TransactionType.MONEY_IN
                      ? `Income Category`
                      : `Expense Category`
                  }`}
                />
              </TouchableOpacity>
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
              dateValue={transactionDetails.date!}
              setDateValue={(data: Moment) =>
                onChangeFields({ ...transactionDetails, date: data })
              }
            />
            {/* TIME PICKER FIELD */}
            <TimePicker
              timeValue={transactionDetails.time!}
              setTimeValue={(data: Moment) =>
                onChangeFields({ ...transactionDetails, time: data })
              }
            />
            {/* PAYMNET METHOD FIELD */}
            <View style={transaction_style.payment_container}>
              <TouchableOpacity
                onPress={() => PaymentMethod.setOpenBottomSheet(true)}
                style={{ width: "90%" }}
              >
                <TextInputField
                  required
                  readOnly
                  value={
                    transactionDetails.paymentType !== undefined
                      ? PAYMENT_CATEGORY[transactionDetails.paymentType]
                          .paymentName
                      : ""
                  }
                  placeHolder={`Pament Method`}
                  style={{ fontSize: 18 }}
                />
              </TouchableOpacity>
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
              <ExpenceCategories
                Categories={Categories}
                onChangeFields={onChangeFields}
                transactionDetails={transactionDetails}
              />
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
      {transactionDetails.transactionType !== undefined && (
        <View style={transaction_style.buttonsContainer}>
          <ButtonField
            label={
              transactionDetails.transactionType === TransactionType.MONEY_IN
                ? `Add Income`
                : `Add Expense`
            }
            size="medium"
            onPress={() => onClickAddTransaction(transactionDetails)}
          />
          <ButtonField
            label={"Reset Fields"}
            size="medium"
            onPress={() => setTransactionDetails(transactionDefault)}
          />
        </View>
      )}
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
  header_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
  buttonsContainer: { gap: 5, marginBottom: 5, padding: 20 },
});
