import { View, StyleSheet, TouchableOpacity } from "react-native";
import Label from "../label/label";
import React from "react";
import {
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

  return (
    <TouchableOpacity onPress={onPressItem}>
      <View style={list_item_style.main_container}>
        <View>
          <Label
            style={{ fontWeight: 500, fontSize: 18 }}
            label={INCOME_CATEGORY[data.categoryType!].categoryName}
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
