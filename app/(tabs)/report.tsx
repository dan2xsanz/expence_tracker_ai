import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { MonthlyExpense } from "../components/charts/monthly-expense";
import { YearlyExpense } from "../components/charts/yearly-expense";
import { DailyExpense } from "../components/charts/today-expense";
import { Loading } from "../components/loading/loading";
import React, { useCallback, useEffect, useState } from "react";
import Label from "../components/label/label";
import { useFocusEffect } from "expo-router";
import {
  getAllYearlyExpense,
  getAllMonthExpense,
  getAllDailyExpense,
} from "../operations";
import {
  MonthlyExpenseInterface,
  YearlyExpenseInterface,
  DailyExpenseInterface,
} from "../config";
import { useBmoStore } from "../store/bmo-store";

export default function ReportScreen() {
  // BMO STORE HANDLER
  const { accountDetail } = useBmoStore();

  // SCREEN LOADING HOOK
  const [loading, setLoading] = useState<boolean>(false);

  // REPORT STATE
  const [dailyExpense, setDailyExpense] = useState<DailyExpenseInterface[]>([]);
  const [monthlyExpense, setMonthlyExpense] = useState<
    MonthlyExpenseInterface[]
  >([]);
  const [yearlyExpense, setYearlyExpense] = useState<YearlyExpenseInterface[]>(
    []
  );

  // Get Daily Expense Function
  const getDailyExpense = async () => {
    const data = await getAllDailyExpense(setLoading, accountDetail.id);
    setDailyExpense(data);
  };

  // Get Monthly Expense Function
  const getMontlyExpense = async () => {
    const data = await getAllMonthExpense(setLoading, accountDetail.id);
    setMonthlyExpense(data);
  };

  // Get Yearly Expense Function
  const getYearlyExpense = async () => {
    const data = await getAllYearlyExpense(setLoading, accountDetail.id);
    setYearlyExpense(data);
  };

  // Auto Call Back the function once the tab has been rendered
  useFocusEffect(
    useCallback(() => {
      getDailyExpense();
      getMontlyExpense();
      getYearlyExpense();
    }, [])
  );

  return (
    <View style={report_style.main_container}>
      <Loading loading={loading} />
      {!loading && (
        <View style={report_style.container}>
          <View style={report_style.header_container}>
            <Label label={"Reports"} size={"medium"} style={{ fontSize: 20 }} />
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ height: Dimensions.get("window").height - 100 }}
          >
            <View
              style={{
                width: "100%",
                marginTop: 10,
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* Daily Expense Trends 
             - Purpose: Show how total expenses change month by month. 
             - Data Points: Months on the x-axis, Total Expenses on the y-axis.
             - Insight: Identify peak spending months and track overall expense growth or reduction. */}
              {dailyExpense.length >= 0 && (
                <DailyExpense dailyExpense={dailyExpense} />
              )}

              {/* Monthly Expense Trends 
             - Purpose: Show how total expenses change month by month. 
             - Data Points: Months on the x-axis, Total Expenses on the y-axis.
             - Insight: Identify peak spending months and track overall expense growth or reduction. */}
              {monthlyExpense.length >= 0 && (
                <MonthlyExpense monthlyExpense={monthlyExpense} />
              )}

              {/* Yearly Expense Trends 
             - Purpose: Show how total expenses change month by month. 
             - Data Points: Months on the x-axis, Total Expenses on the y-axis.
             - Insight: Identify peak spending months and track overall expense growth or reduction. */}
              {yearlyExpense.length > 0 && (
                <YearlyExpense yearlyExpense={yearlyExpense} />
              )}
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
}

const report_style = StyleSheet.create({
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
});
