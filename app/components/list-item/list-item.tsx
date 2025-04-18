import { View, StyleSheet, TouchableOpacity } from "react-native";
import Label from "../label/label";
import React from "react";
import {
  EXPENCE_CATEGORY,
  INCOME_CATEGORY,
  TransactionInterface,
  TransactionType,
} from "@/app/config";

interface ListItemParam {
  onPressItem: () => void;
  data: TransactionInterface;
}

export const ListItem = ({ data, onPressItem }: ListItemParam) => {
  // TRANSACTION TYPE DISPLAY
  const transactionTypeDisplay = (
    transactionType: TransactionType | undefined,
    itemAmmount: number | undefined
  ) => {
    if (transactionType === TransactionType.MONEY_OUT) {
      return `- PHP ${Number(itemAmmount).toLocaleString()}`;
    }
    return `PHP ${Number(itemAmmount).toLocaleString()}`;
  };

  const transacationCategory = (
    transactionType: TransactionType | undefined
  ): string => {
    if (transactionType === TransactionType.MONEY_IN) {
      return INCOME_CATEGORY[data.categoryType!].categoryName;
    }
    return EXPENCE_CATEGORY[data.categoryType!].expenceName;
  };

  return (
    <TouchableOpacity onPress={onPressItem}>
      <View style={list_item_style.main_container}>
        <View>
          <Label
            style={{ fontWeight: 500, fontSize: 18 }}
            label={transacationCategory(data.transactionType)}
            size={"small"}
          />
          <Label label={data.note} size={"note"} />
        </View>
        <Label
          style={{
            color:
              data.transactionType === TransactionType.MONEY_OUT
                ? "red"
                : "black",
          }}
          label={transactionTypeDisplay(data.transactionType, data.amountValue)}
          size="small"
        />
      </View>
    </TouchableOpacity>
  );
};

const list_item_style = StyleSheet.create({
  main_container: {
    width: "100%",
    height: 50,
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#36c4a50c",
    justifyContent: "space-between",
    borderStyle: "solid",
    borderBottomWidth: 0.3,
    borderBottomColor: "#0b2b24fd",
  },
});
