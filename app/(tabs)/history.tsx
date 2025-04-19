import TransactionHeader from "../components/transaction-header/transaction-header";
import { Fragment, useCallback, useEffect, useState } from "react";
import TextInputField from "../components/text-input/text-input";
import DatePicker from "../components/date-picker/date-picker";
import { View, StyleSheet, ScrollView } from "react-native";
import { ListItem } from "../components/list-item/list-item";
import ButtonField from "../components/button/button";
import { getAllTransaction } from "../operations";
import Label from "../components/label/label";
import { useFocusEffect, useRouter } from "expo-router";
import {
  transactioFilternDefault,
  TransactionListFilter,
  TransactionInterface,
} from "../config";
import {
  FilterNotActiveIcon,
  FilterActiveIcon,
} from "../components/icons/icons";
import { Loading } from "../components/loading/loading";
import { useLoadingScreen } from "../hooks/loading-screen-hooks";

export default function HistoryScreen() {
  // SCREEN ROUTING
  const router = useRouter();

  // SCREEN LOADING HOOK
  const { loading, setLoading } = useLoadingScreen();

  // Transaction Filter State
  const [transactionFilter, setTransactionFilter] =
    useState<TransactionListFilter>(transactioFilternDefault);

  // Display Filter State
  const [displayFilter, setDisplayFilter] = useState<boolean>(false);

  // Search Button Click State
  const [searchClick, setSearchClick] = useState<boolean>(false);

  // Transaction List State
  const [transactionList, setTransactionList] = useState<
    Array<TransactionInterface>
  >([]);

  // Reste Trasaction type everytime the screen is focused
  useFocusEffect(
    useCallback(() => {
      setDisplayFilter(false);
      transactionLisFetch();
      setTransactionFilter(transactioFilternDefault);
      4;
    }, [])
  );

  // Fetch Transaction List
  const transactionLisFetch = useCallback(async () => {
    return setTransactionList(
      await getAllTransaction({
        data: transactionFilter,
        setLoading,
        setSearchClick,
      })
    );
  }, [searchClick]);

  // Trigger fetching of transaction list once filter changed
  useEffect(() => {
    transactionLisFetch();
  }, [searchClick]);

  return (
    <View style={history_style.main_container}>
      <Loading loading={loading} />
      {!loading && (
        <View style={history_style.container}>
          <View style={history_style.header_container}>
            <Label
              label={"Transaction History"}
              size={"medium"}
              style={{ fontSize: 20 }}
            />
            {!displayFilter ? (
              <FilterActiveIcon
                onPress={() => setDisplayFilter(!displayFilter)}
              />
            ) : (
              <FilterNotActiveIcon
                onPress={() => setDisplayFilter(!displayFilter)}
              />
            )}
          </View>
          <Label
            size={"small"}
            style={{ fontSize: 12, marginTop: 5, marginBottom: 10 }}
            label={
              displayFilter ? "Search by Transaction Type." : "Transaction List"
            }
          />
          {/* TRANSACTION FILTER SELECTION  */}
          {displayFilter && (
            <View style={{ width: "100%", marginTop: -20 }}>
              <TransactionHeader
                transactionDetails={transactionFilter.transactionType}
                setTransactionDetails={(data) =>
                  setTransactionFilter({
                    ...transactionFilter,
                    transactionType: data,
                  })
                }
              />
              <View style={history_style.instruction_divider}>
                <Label
                  size={"small"}
                  style={{ fontSize: 12 }}
                  label={"Search by Date"}
                />
              </View>
              <View style={{ marginTop: 10, gap: 5 }}>
                <DatePicker
                  label="From: "
                  isFocused={
                    !transactionFilter.dateFrom?.isSame(
                      transactioFilternDefault.dateFrom
                    )
                  }
                  dateValue={transactionFilter.dateFrom}
                  setDateValue={(data) =>
                    setTransactionFilter({
                      ...transactionFilter,
                      dateFrom: data,
                    })
                  }
                />
                <DatePicker
                  label="To: "
                  isFocused={
                    !transactionFilter.dateTo?.isSame(
                      transactioFilternDefault.dateTo
                    )
                  }
                  dateValue={transactionFilter.dateTo}
                  setDateValue={(data) =>
                    setTransactionFilter({
                      ...transactionFilter,
                      dateTo: data,
                    })
                  }
                />
                <View style={history_style.instruction_divider}>
                  <Label
                    size={"small"}
                    style={{ fontSize: 12 }}
                    label={"Search by Note"}
                  />
                </View>
                <TextInputField
                  size="medium"
                  placeHolder={"Note:"}
                  isFocused={
                    transactionFilter.note !== transactioFilternDefault.note
                  }
                  keyboardType={"numeric"}
                  style={{ marginTop: 2 }}
                  value={transactionFilter.note}
                  onChange={(data) =>
                    setTransactionFilter({ ...transactionFilter, note: data })
                  }
                />
              </View>
            </View>
          )}

          {!displayFilter && (
            <Fragment>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ height: "90%" }}
              >
                {transactionList.map((data, index) => {
                  return (
                    <ListItem
                      key={index}
                      onPressItem={() => router.push("/(receipt)/receipt")}
                      data={data}
                    />
                  );
                })}
              </ScrollView>
            </Fragment>
          )}
        </View>
      )}
      {displayFilter && (
        <View style={history_style.buttonsContainer}>
          <ButtonField
            label={"Apply Filter"}
            size="medium"
            onPress={() => {
              setDisplayFilter(false);
              setSearchClick(true);
            }}
          />
          <ButtonField
            label={"Reset Filter"}
            size="medium"
            onPress={() => {
              setSearchClick(true);
              setDisplayFilter(false);
              setTransactionFilter(transactioFilternDefault);
            }}
          />
        </View>
      )}
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
    marginTop: 10,
  },
  intruction_line: { height: 1, width: "60%", backgroundColor: "black" },
  scrollContainer: {
    maxHeight: 70,
  },
  buttonsContainer: { gap: 5, marginBottom: 5, padding: 20 },
});
