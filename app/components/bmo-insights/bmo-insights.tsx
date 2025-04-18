import { View, Image, Dimensions, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Label from "../label/label";
import React, { useState } from "react";
import moment from "moment";

export const BmoInsights = () => {
  // CURRENT WEEK
  const startOfWeek = moment().startOf("week");
  const endOfWeek = moment().endOf("week");

  const [dispayedFilter, setDisplayedFlter] = useState<string>(
    `${startOfWeek.format("DD MMM")} - ${endOfWeek.format("DD MMM YYYY")}`
  );

  const onChangeFilter = (selectedFilter: string) => {
    switch (selectedFilter) {
      case "1":
        setDisplayedFlter(
          `${startOfWeek.format("DD MMM")} - ${endOfWeek.format("DD MMM YYYY")}`
        );
        break;
      case "2":
        setDisplayedFlter(moment().format("MMM YYYY"));
        break;
      case "3":
        setDisplayedFlter(moment().format("YYYY"));
        break;
    }
  };

  return (
    <View>
      <Label
        label={"Insight Summary"}
        style={{
          fontSize: 15,
          marginTop: 18,
        }}
      />
      <View style={insight_style.insight_container}>
        <Label
          label={dispayedFilter}
          style={{ fontWeight: 500, fontSize: 18 }}
        />
        <View style={insight_style.insight_filter}>
          <Picker
            style={{ fontWeight: "500", padding: -1 }}
            selectedValue={undefined}
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
              label={"₱20,000.00"}
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
              label={"₱20,000.00"}
              style={{ fontWeight: 600, fontSize: 18, color: "#ff0000a9" }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export const insight_style = StyleSheet.create({
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
