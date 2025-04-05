import { TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { TransactionType } from "@/app/config";
import Label from "@/app/components/label/label";
import React, { Fragment } from "react";

interface TransactionHeaderProps {
  transactionDetails: TransactionType | undefined;
  setTransactionDetails: (data: TransactionType | undefined) => void;
  titleDisplay?: boolean;
}

const TransactionHeader = ({
  titleDisplay,
  transactionDetails,
  setTransactionDetails,
}: TransactionHeaderProps) => {
  return (
    <Fragment>
      <View style={{ marginTop: 10 }}>
        {titleDisplay && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <Label
              label={"Please select transaction type"}
              size={"small"}
              style={{ fontSize: 12 }}
            />
            <View
              style={{ height: 1, width: "50%", backgroundColor: "black" }}
            />
          </View>
        )}

        <View style={transaction_style.transaction_option_container}>
          <TouchableOpacity
            onPress={() => setTransactionDetails(TransactionType.MONEY_IN)}
            disabled={transactionDetails === TransactionType.MONEY_IN}
            style={{
              ...transaction_style.transaction_type_container,
              ...(transactionDetails === TransactionType.MONEY_IN &&
                transaction_style.transaction_selected),
            }}
          >
            <Label
              label={"Money In"}
              size={"medium"}
              style={{ fontSize: 18 }}
            />
            <Image
              source={require("../../../assets/bmoneyin.png")}
              style={{ width: 100, height: 100 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setTransactionDetails(TransactionType.MONEY_OUT)}
            disabled={transactionDetails === TransactionType.MONEY_OUT}
            style={{
              ...transaction_style.transaction_type_container,
              ...(transactionDetails === TransactionType.MONEY_OUT &&
                transaction_style.transaction_selected),
            }}
          >
            <Label
              label={"Money Out"}
              size={"medium"}
              style={{ fontSize: 18 }}
            />
            <Image
              source={require("../../../assets/bimo.png")}
              style={{ width: 75, height: 90 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Fragment>
  );
};

const transaction_style = StyleSheet.create({
  header_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  transaction_option_container: {
    marginTop: 10,
    width: "100%",
    height: 80,
    flexDirection: "row",
    gap: 2,
  },
  transaction_type_container: {
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
    width: "50%",
    height: "auto",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 10,
    shadowColor: "black",
    shadowOpacity: 0.5,
  },
  transaction_selected: {
    elevation: 100,
    backgroundColor: "#36c4a571",
  },
});

export default TransactionHeader;
