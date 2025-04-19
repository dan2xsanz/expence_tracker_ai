import React, { useCallback, useEffect, useState } from "react";
import { getTotalTransactions } from "@/app/operations";
import { View, Image, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useFocusEffect } from "expo-router";
import Label from "../label/label";
import moment from "moment";
import {
  TotalTransactionrResponseInterface,
  transactionSummaryDefault,
} from "@/app/config";

interface BmoInsightInterface {
  setLoading: (data: boolean) => void;
}

export const BmoInsights = ({ setLoading }: BmoInsightInterface) => {
  // CURRENT WEEK
  const startOfWeek = moment().startOf("week");
  const endOfWeek = moment().endOf("week");

  //  DISPLAYED FILTER
  const [dispayedFilter, setDisplayedFlter] = useState<{
    displayName: string;
    totalExpense?: number;
    totalIncome?: number;
    filterSelected: string;
  }>(transactionSummaryDefault);

  // ON CHANGE SUMMARY FILTER
  const onChangeFilter = (selectedFilter: string) => {
    switch (selectedFilter) {
      case "1":
        setDisplayedFlter({
          displayName: `${startOfWeek.format("DD MMM")} - ${endOfWeek.format(
            "DD MMM YYYY"
          )}`,
          filterSelected: "1",
        });
        break;
      case "2":
        setDisplayedFlter({
          displayName: moment().format("MMM YYYY"),
          filterSelected: "2",
        });
        break;
      case "3":
        setDisplayedFlter({
          displayName: moment().format("YYYY"),
          filterSelected: "3",
        });
        break;
    }
  };

  // GET ALL TRANSACTOION SUMMARY
  const getAllTransactionSummary = useCallback(async () => {
    const totalTransactions: TotalTransactionrResponseInterface =
      await getTotalTransactions(
        { accountMasterId: 0, filterType: dispayedFilter.filterSelected },
        setLoading
      );
    setDisplayedFlter({
      ...dispayedFilter,
      totalExpense: totalTransactions.totalExpense,
      totalIncome: totalTransactions.totalIncome,
    });
  }, [dispayedFilter.filterSelected]);

  // Reste Trasaction type everytime the screen is focused
  useFocusEffect(
    useCallback(() => {
      getAllTransactionSummary();
    }, [])
  );

  useEffect(() => {
    getAllTransactionSummary();
  }, [dispayedFilter.filterSelected]);

  return (
    <View>
      <Label label={"Insight Summary"} style={insight_style.insight_label} />
      <View style={insight_style.insight_container}>
        <Label
          label={dispayedFilter.displayName}
          style={{ fontWeight: 500, fontSize: 18 }}
        />
        <View style={insight_style.insight_filter}>
          <Picker
            style={{ fontWeight: "500", padding: -1 }}
            selectedValue={dispayedFilter.filterSelected}
            onValueChange={(itemValue) => onChangeFilter(itemValue!)}
          >
            <Picker.Item label="Weekly" value="1" />
            <Picker.Item label="Monthly" value="2" />
            <Picker.Item label="Yearly" value="3" />
          </Picker>
        </View>
      </View>
      <View style={insight_style.insight_item_holder}>
        <View style={insight_style.total_income_container}>
          <Image
            source={require("../../../assets/bmoneyin.png")}
            style={{ width: 60, height: 60 }}
          />
          <View style={{ marginLeft: 5 }}>
            <Label
              label={"Total Income"}
              style={{ fontWeight: 400, fontSize: 12 }}
            />
            <Label
              label={`₱ ${
                dispayedFilter.totalIncome
                  ? dispayedFilter.totalIncome.toLocaleString()
                  : 0
              }`}
              style={{ fontWeight: 600, fontSize: 18, color: "#037a03d2" }}
            />
          </View>
        </View>
        <View style={insight_style.total_expense_container}>
          <Image
            source={require("../../../assets/bimo.png")}
            style={{ width: 60, height: 60 }}
          />
          <View>
            <Label
              label={"Total Expense"}
              style={{ fontWeight: 400, fontSize: 12 }}
            />
            <Label
              label={`₱ ${
                dispayedFilter.totalExpense
                  ? dispayedFilter.totalExpense.toLocaleString()
                  : 0
              }`}
              style={{ fontWeight: 600, fontSize: 18, color: "#ff0000a9" }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export const insight_style = StyleSheet.create({
  insight_label: {
    fontSize: 15,
    marginTop: 18,
  },
  insight_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  insight_filter: {
    width: "40%",
    borderWidth: 0.8,
    borderColor: "black",
    borderRadius: 6,
    overflow: "hidden",
    justifyContent: "center",
    height: 40,
  },
  insight_item_holder: {
    gap: "0.5%",
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  total_income_container: {
    width: "49.5%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#36c4a571",
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
  },
  total_expense_container: {
    width: "49.5%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#36c4a571",
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
  },
});
