import React, { Fragment } from "react";
import Label from "../label/label";
import { PieChart } from "react-native-chart-kit";
import { MonthlyExpenseInterface } from "@/app/config";
import { getRandomColor } from "@/app/utils";
import { Dimensions } from "react-native";

interface MonthlyExpenseProps {
  monthlyExpense: MonthlyExpenseInterface[];
}
export const MonthlyExpense = ({ monthlyExpense }: MonthlyExpenseProps) => {
  return (
    <Fragment>
      <Label
        label={"Current Month Expense by Category"}
        style={{ marginTop: 10, marginBottom: 10 }}
        size={"small"}
      />
      <PieChart
        data={monthlyExpense.map((item) => {
          const color = getRandomColor(); // generate once
          return {
            name: item.expenseName,
            population: Number(item.totalExpense), // keep this as a number for PieChart
            color: color,
            legendFontColor: "black",
            legendFontSize: 12,
          };
        })}
        width={Dimensions.get("window").width}
        height={250}
        chartConfig={{
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        accessor={"population"} // Use "population" to represent expenses
        backgroundColor={"#00000005"}
        paddingLeft={"15"}
      />
    </Fragment>
  );
};
