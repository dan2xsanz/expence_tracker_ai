import { View, Text, StyleSheet, ScrollView } from "react-native";
import TransactionHeader from "../components/transaction-header/transaction-header";
import Label from "../components/label/label";
import ListItem from "../components/list-item/list-item";

export default function HistoryScreen() {
  return (
    <View style={history_style.main_container}>
      <View style={history_style.container}>
        {/* TRANSACTION HEADER SELECTION */}
        <TransactionHeader
          headerText="Transaction History"
          transactionDetails={undefined}
          setTransactionDetails={(data) => {}}
        />
        <View style={history_style.instruction_divider}>
          <Label
            size={"small"}
            style={{ fontSize: 12 }}
            label={"Transaction List"}
          />
          <View style={history_style.intruction_line} />
        </View>
        <ScrollView style={{ height: "73%" }}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </ScrollView>
      </View>
    </View>
  );
}

const history_style = StyleSheet.create({
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
  instruction_divider: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    marginTop: 10,
  },
  intruction_line: { height: 1, width: "70%", backgroundColor: "black" },
  scrollContainer: {
    maxHeight: 70,
  },
});
