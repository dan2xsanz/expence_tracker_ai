import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { getAllDailyExpense, getAllMonthExpense } from "../operations";
import { BarChart, PieChart } from "react-native-chart-kit";
import React, { useCallback, useState } from "react";
import { getRandomColor, getRandomDarkColor } from "../utils";
import Label from "../components/label/label";
import { useFocusEffect } from "expo-router";
import {
  MonthlyExpenseInterface,
  DailyExpenseInterface,
  EXPENCE_CATEGORY,
} from "../config";

export default function ReportScreen() {
  // REPORT STATE
  const [dailyExpense, setDailyExpense] = useState<DailyExpenseInterface[]>([]);
  const [monthlyExpense, setMonthlyExpense] = useState<
    MonthlyExpenseInterface[]
  >([]);

  // Get Daily Expense Function
  const getDailyExpense = async () => {
    const data = await getAllDailyExpense();
    setDailyExpense(data);
  };

  // Get Monthly Expense Funcition
  const getMontlyExpense = async () => {
    const data = await getAllMonthExpense();
    setMonthlyExpense(data);
  };

  // Auto Call Back the function once the tab has been rendered
  useFocusEffect(
    useCallback(() => {
      getDailyExpense();
      getMontlyExpense();
    }, [])
  );

  return (
    <View style={report_style.main_container}>
      <View style={report_style.container}>
        <View style={report_style.header_container}>
          <Label label={"Reports"} size={"medium"} style={{ fontSize: 20 }} />
        </View>

        <View style={{ height: "100%", width: "100%" }}>
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
            <Label label={"Today's Expense by Category"} size={"small"} />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <BarChart
                data={{
                  labels: EXPENCE_CATEGORY.map((data) => data.expenceName),
                  datasets: [
                    {
                      data: EXPENCE_CATEGORY.map((category) => {
                        const totalAmount = dailyExpense
                          .filter(
                            (expense) =>
                              category.expenceId.toString() ===
                              expense.categoryId?.toString()
                          )
                          .reduce(
                            (sum, expense) => sum + expense.amountValue!,
                            0
                          );
                        return totalAmount;
                      }),
                    },
                  ],
                }}
                width={EXPENCE_CATEGORY.length * 80}
                height={220}
                yAxisLabel="₱"
                yAxisSuffix=""
                yAxisInterval={1}
                chartConfig={{
                  backgroundGradientFrom: "#ffffff",
                  backgroundGradientTo: "#f5f5f5",
                  decimalPlaces: 2,
                  color: (opacity = 1) => `rgba(255, 60, 0, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  propsForBackgroundLines: {
                    strokeDasharray: "2",
                    strokeWidth: "1",
                    stroke: "rgba(0, 0, 0, 0.1)",
                  },
                  propsForLabels: {
                    fontSize: 10,
                    fontWeight: "500",
                  },
                  barPercentage: 1.4,
                  barRadius: 1,
                  fillShadowGradient: "#e4aea4",
                  fillShadowGradientOpacity: 0.7,
                  strokeWidth: 2,
                  propsForDots: {
                    r: "5",
                    strokeWidth: "2",
                    stroke: "#fff",
                  },
                }}
              />
            </ScrollView>

            {/* Monthly Expense Trends 
              - Purpose: Show how total expenses change month by month. 
              - Data Points: Months on the x-axis, Total Expenses on the y-axis.
              - Insight: Identify peak spending months and track overall expense growth or reduction. */}
            <Label
              label={"Current Month Expense by Category"}
              style={{ marginTop: 10 }}
              size={"small"}
            />
            <PieChart
              data={monthlyExpense.map((item) => {
                const color = getRandomColor(); // generate once
                const formattedExpense = Number(
                  item.totalExpense
                ).toLocaleString(); // formatted string for display

                return {
                  name: item.expenseName,
                  population: Number(item.totalExpense), // keep this as a number for PieChart
                  color: color,
                  legendFontColor: "black",
                  legendFontSize: 12,
                };
              })}
              width={Dimensions.get("window").width - 50}
              height={250}
              chartConfig={{
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              }}
              accessor={"population"} // Use "population" to represent expenses
              backgroundColor={"transparent"}
              paddingLeft={"15"}
            />
            {/* <LineChart
              data={{
                labels: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
                datasets: [
                  {
                    data: Array.from({ length: 12 }, () => Math.random() * 100), // First line data
                    color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`, // Line color for first line
                    strokeWidth: 2, // Line width for the first line
                  },
                  {
                    data: Array.from({ length: 12 }, () => Math.random() * 100), // Second line data
                    color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // Line color for second line
                    strokeWidth: 2, // Line width for the second line
                  },
                ],
              }}
              width={Dimensions.get("window").width - 60}
              height={220}
              yAxisLabel="$"
              yAxisSuffix="k"
              yAxisInterval={1}
              chartConfig={{
                backgroundGradientFrom: "#cf641c85",
                backgroundGradientTo: "#cf641cfd",
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                propsForDots: {
                  r: "8",
                  strokeWidth: "5",
                  stroke: "#d31212ff",
                },
                propsForBackgroundLines: {
                  strokeDasharray: "",
                  strokeWidth: "1",
                  stroke: "rgba(255, 255, 255, 0.226)",
                },
              }}
              bezier
              style={{
                borderRadius: 5,
              }}
            /> */}
          </View>
        </View>
      </View>
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
