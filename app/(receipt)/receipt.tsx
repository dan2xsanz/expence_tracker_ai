import { View, StyleSheet, Dimensions, Image } from "react-native";
import { ReceiptScratch } from "../components/icons/icons";
import Label from "../components/label/label";
import { useBmoStore } from "../store/bmo-store";
import { TransactionType } from "../config";
import { useState } from "react";
import { getTransactionDetailsDisplay } from "../utils";
import moment from "moment";

export default function ReceiptScreen() {
  // BMO STORE HANDLER
  const { transactionDetail } = useBmoStore();

  return (
    <View style={receipt_style.main_container}>
      <View style={receipt_style.container}>
        <View style={receipt_style.receipt_main_container}>
          <Image
            source={
              transactionDetail.transactionType === TransactionType.MONEY_IN
                ? require("../../assets/bmoneyin.png")
                : require("../../assets/bimo.png")
            }
            style={{ width: 100, height: 100, marginTop: -50 }}
          />
          <Label
            label={getTransactionDetailsDisplay(transactionDetail).name!}
            style={{ fontSize: 20, fontWeight: "bold" }}
          />
          <Label
            size="small"
            label={getTransactionDetailsDisplay(
              transactionDetail
            ).categoryName!?.toString()}
          />
          <Label
            size="small"
            label={
              getTransactionDetailsDisplay(transactionDetail).paymentMethodName!
            }
          />
          {transactionDetail.note && (
            <Label
              label={transactionDetail.note}
              size="small"
              style={{ marginTop: 20 }}
            />
          )}
          <View style={receipt_style.amount_container}>
            <Label
              size="small"
              label={"Amount"}
              style={{ fontWeight: "bold" }}
            />
            <Label
              size="small"
              label={getTransactionDetailsDisplay(
                transactionDetail
              ).amount!?.toString()}
              style={{ fontWeight: "bold" }}
            />
          </View>
          <View style={receipt_style.total_amount_container}>
            <Label
              size="small"
              style={{ fontWeight: "bold" }}
              label={
                transactionDetail.transactionType === TransactionType.MONEY_IN
                  ? "Total Amount Received"
                  : "Total Amount Deducted"
              }
            />
            <Label
              size="small"
              label={getTransactionDetailsDisplay(
                transactionDetail
              ).amount!?.toString()}
              style={{ fontWeight: "bold" }}
            />
          </View>
          <View style={receipt_style.ref_no_container}>
            <View style={receipt_style.ref_no_style}>
              <Label size="small" label={"Ref No:"} />
              <Label
                size="small"
                style={{ fontWeight: "bold" }}
                label={"1234567889"}
              />
            </View>
            <Label
              size="small"
              label={moment(transactionDetail.date!).format("MMMM DD, YYYY")}
            />
          </View>
          <Label
            label={"SNZ Inc."}
            style={{
              fontSize: 15,
              fontStyle: "italic",
              alignSelf: "center",
              marginTop: 10,
            }}
          />
        </View>
        <ReceiptScratch />
      </View>
    </View>
  );
}
const receipt_style = StyleSheet.create({
  main_container: {
    height: Dimensions.get("window").height,
    justifyContent: "space-between",
    backgroundColor: "#41a892ff",
  },
  container: {
    paddingTop: 80,
    paddingLeft: 20,
    paddingRight: 20,
  },
  receipt_main_container: {
    height: "70%",
    alignItems: "center",
    backgroundColor: "white",
  },
  amount_container: {
    width: "90%",
    marginTop: 30,
    display: "flex",
    paddingTop: 20,
    alignItems: "center",
    paddingBottom: 20,
    flexDirection: "row",
    borderTopWidth: 0.2,
    borderBottomWidth: 0.2,
    borderColor: "#00000050",
    justifyContent: "space-between",
  },
  total_amount_container: {
    width: "90%",
    display: "flex",
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 0.2,
    borderColor: "#00000050",
    alignItems: "center",
  },
  ref_no_container: {
    width: "90%",
    display: "flex",
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ref_no_style: {
    display: "flex",
    flexDirection: "row",
    gap: 2,
  },
});
