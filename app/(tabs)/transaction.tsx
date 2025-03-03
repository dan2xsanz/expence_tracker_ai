import TransactionHeader from "../components/transaction-components/transaction-header";
import BottomSheetDrawer from "../components/botton-sheet/bottom-sheet";

import { View, StyleSheet, TouchableOpacity } from "react-native";
import TextInputField from "../components/text-input/text-input";
import DatePicker from "../components/date-picker/date-picker";
import TimePicker from "../components/time-picker/time-picker";
import { useBottomSheet } from "../hooks/bottom-sheet-hooks";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import ButtonField from "../components/button/button";
import React, { Fragment, useCallback, useState } from "react";
import Label from "../components/label/label";
import { useFocusEffect } from "expo-router";
import {
  transactionDefault,
  TransactionInterface,
  TransactionType
} from "../config";
import TagButton from "../components/tag-button/tag-button";
import {
  CreditCardIcon,
  ElypsisIcon,
  GovernmentIcon,
  InsuranceIcon,
  MoneyCheckIcon,
  PensionIcon,
  RemittanceIcon,
  SackMoneyIcon,
  SavingIcon,
  StocksIcon
} from "../components/icons/icons";

export default function TransactionScreen() {
  const [transactionDetails, setTransactionDetails] =
    useState<TransactionInterface>(transactionDefault);

  // Category List
  const Categories = useBottomSheet();

  // Payment Method LLst
  const PaymentMethod = useBottomSheet();

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
            <View style={transaction_style.payment_container}>
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
            <Fragment>
              <View style={transaction_style.categoriesContainer}>
                <TagButton tagText={"Allowance"} icon={<SackMoneyIcon />} />
                <TagButton tagText={"Cash Savings"} icon={<SavingIcon />} />
                <TagButton tagText={"Extra Income"} icon={<SackMoneyIcon />} />
                <TagButton tagText={"Fund Transfer"} icon={<SackMoneyIcon />} />
              </View>
              <View style={transaction_style.categoriesContainer}>
                <TagButton
                  tagText={"Government Aid"}
                  icon={<GovernmentIcon />}
                />
                <TagButton tagText={"Insurance"} icon={<InsuranceIcon />} />
                <TagButton tagText={"Pension"} icon={<PensionIcon />} />
                <TagButton tagText={"Remittance"} icon={<RemittanceIcon />} />
              </View>
              <View style={transaction_style.categoriesContainer}>
                <TagButton tagText={"Salary"} icon={<SackMoneyIcon />} />
                <TagButton tagText={"Stocks/Crypto"} icon={<StocksIcon />} />
                <TagButton tagText={"Others"} icon={<ElypsisIcon />} />
                <TagButton tagText={""} icon={<></>} disabled />
              </View>
            </Fragment>
          }
        />
        <BottomSheetDrawer
          openSheet={PaymentMethod.openBottomSheet}
          setOpenDrawer={PaymentMethod.setOpenBottomSheet}
          sheetTitle={"Select Payment Method"}
          children={
            <Fragment>
              <View style={transaction_style.categoriesContainer}>
                <TagButton
                  tagText={"Bank Transfer"}
                  icon={<RemittanceIcon />}
                />
                <TagButton tagText={"Cash"} icon={<SackMoneyIcon />} />
                <TagButton tagText={"Check"} icon={<MoneyCheckIcon />} />
                <TagButton tagText={"Credit Card"} icon={<CreditCardIcon />} />
              </View>
              <View style={transaction_style.categoriesContainer}>
                <TagButton tagText={"Crypto"} icon={<StocksIcon />} />
                <TagButton tagText={"Debit Card"} icon={<CreditCardIcon />} />
              </View>
            </Fragment>
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
    backgroundColor: "white"
  },
  container: {
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 20
  },
  fields_container: {
    marginTop: 20,
    gap: 5
  },
  instruction_divider: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10
  },
  intruction_line: { height: 1, width: "70%", backgroundColor: "black" },
  amount_container: {
    gap: 5,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  category_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  payment_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  bottomSheetContainer: {
    backgroundColor: "white",
    padding: 20,
    height: 400,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  categoriesContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 2
  }
});
