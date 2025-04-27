import { YearlyExpenseInterface } from "@/app/config";
import React, { Fragment } from "react";
import { ScrollView } from "react-native";
import { LineChart } from "react-native-chart-kit";
import Label from "../label/label";

interface YearlyExpenseProps {
  yearlyExpense: YearlyExpenseInterface[];
}
export const YearlyExpense = ({ yearlyExpense }: YearlyExpenseProps) => {
  return (
    <Fragment>
      <Label
        label={"Current Year Income vs Expense"}
        style={{ marginTop: 10, marginBottom: 10 }}
        size={"small"}
      />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <LineChart
          data={{
            labels: yearlyExpense.map((data) => data.transactionMonth!),
            datasets: [
              {
                data: yearlyExpense.map((data) => data.transactionOut!), // First line data
                color: (opacity = 1) => `rgba(255, 60, 0, ${opacity})`, // Line color for first line
                strokeWidth: 2, // Line width for the first line
              },
              {
                data: yearlyExpense.map((data) => data.transactionIn! || 0), // Second line data (with fallback to 0 if undefined or null)
                color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`, // Line color for second line
                strokeWidth: 2, // Line width for the second line
              },
            ],
          }}
          width={yearlyExpense.length * 80}
          height={220}
          yAxisLabel="₱"
          yAxisInterval={1}
          chartConfig={{
            backgroundGradientFrom: "#ffffff", // Changed background gradient from BarChart
            backgroundGradientTo: "#f5f5f5", // Changed background gradient to BarChart
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 60, 0, ${opacity})`, // Changed line color to match BarChart
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Label color adjusted for dark theme
            propsForBackgroundLines: {
              strokeDasharray: "2", // Dashed background lines
              strokeWidth: "1",
              stroke: "rgba(0, 0, 0, 0.1)", // Lighter background line color
            },
            fillShadowGradient: "transparent", // <- This removes the fill
            fillShadowGradientOpacity: 0, // <- Make sure it's fully transparent

            propsForLabels: {
              fontSize: 10, // Adjusted font size for labels
              fontWeight: "500", // Adjusted font weight for labels
            },
            propsForDots: {
              r: "5", // Dot radius
              strokeWidth: "2", // Stroke width for dots
              stroke: "#fff", // Dot stroke color
            },
          }}
          bezier
        />
      </ScrollView>
    </Fragment>
  );
};
