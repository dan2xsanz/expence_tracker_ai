import React, { Fragment } from "react";
import Label from "../label/label";
import { ScrollView } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { DailyExpenseInterface, EXPENCE_CATEGORY } from "@/app/config";

interface DailyExpenseProps {
  dailyExpense: DailyExpenseInterface[];
}
export const DailyExpense = ({ dailyExpense }: DailyExpenseProps) => {
  return (
    <Fragment>
      <Label
        label={"Current Day Expense by Category"}
        size={"small"}
        style={{ marginBottom: 10 }}
      />
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
                    .reduce((sum, expense) => sum + expense.amountValue!, 0);
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
    </Fragment>
  );
};
