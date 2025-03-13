import TransactionHeader from "../components/transaction-header/transaction-header";
import { transactioFilternDefault, TransactionListFilter } from "../config";
import TextInputField from "../components/text-input/text-input";
import DatePicker from "../components/date-picker/date-picker";
import TimePicker from "../components/time-picker/time-picker";
import { View, StyleSheet, ScrollView } from "react-native";
import ListItem from "../components/list-item/list-item";
import {
  FilterActiveIcon,
  FilterNotActiveIcon,
} from "../components/icons/icons";
import Label from "../components/label/label";
import { Fragment, useCallback, useState } from "react";
import { Moment } from "moment";
import { useFocusEffect } from "expo-router";

export default function HistoryScreen() {
  // DISPLAY FILTER
  const [displayFilter, setDisplayFilter] = useState<boolean>(false);

  // TRASNSACTION FILTER STATE
  const [transactionDetails, setTransactionDetails] =
    useState<TransactionListFilter>(transactioFilternDefault);

  // Reset transactionType every time the screen is focused
  useFocusEffect(
    useCallback(() => {
      setDisplayFilter(false);
      setTransactionDetails(transactioFilternDefault);
    }, [])
  );

  return (
    <View style={history_style.main_container}>
      <View style={history_style.container}>
        <View style={history_style.header_container}>
          <Label
            label={"Transaction History"}
            size={"medium"}
            style={{ fontSize: 20 }}
          />
          {displayFilter ? (
            <FilterActiveIcon
              onPress={() => setDisplayFilter(!displayFilter)}
            />
          ) : (
            <FilterNotActiveIcon
              onPress={() => setDisplayFilter(!displayFilter)}
            />
          )}
        </View>

        {/* TRANSACTION FILTER SELECTION  */}
        {displayFilter && (
          <View>
            <TransactionHeader
              titleDisplay="Please specify filter for transaction history. "
              transactionDetails={transactionDetails.transactionType}
              setTransactionDetails={(data) =>
                setTransactionDetails({
                  ...transactionDetails,
                  transactionType: data,
                })
              }
            />
            <View style={{ marginTop: 10, gap: 5 }}>
              <DatePicker
                dateValue={transactionDetails.date}
                setDateValue={(data) =>
                  setTransactionDetails({
                    ...transactionDetails,
                    date: data,
                  })
                }
              />
              {/* TIME PICKER FIELD */}
              <TimePicker
                timeValue={transactionDetails.time!}
                setTimeValue={(data: Moment) =>
                  setTransactionDetails({
                    ...transactionDetails,
                    time: data,
                  })
                }
              />
              <TextInputField
                size="medium"
                placeHolder={"Search by note"}
                keyboardType={"numeric"}
                style={{ marginTop: 2 }}
                value={undefined}
                onChange={() => {}}
              />
            </View>
          </View>
        )}

        {!displayFilter && (
          <Fragment>
            <View style={history_style.instruction_divider}>
              <Label
                size={"small"}
                style={{ fontSize: 12 }}
                label={"Transaction List"}
              />
              <View style={history_style.intruction_line} />
            </View>
            <ScrollView style={{ height: "90%" }}>
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
          </Fragment>
        )}
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
  header_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
