import React, { Fragment } from "react";
import { View, StyleSheet } from "react-native";
import TagButton from "../tag-button/tag-button";
import { DollarSign, EuroSign, PesoSign, YenSign } from "../icons/icons";
import { CreateAccountInterface, LoginResponseInterface } from "@/app/config";
import { updateAccountOperation } from "@/app/operations";

interface CurrencyCategoriesInterface {
  CurrencyType: any;
  accountDetail: CreateAccountInterface;
  setLoading: (data: boolean) => void;
  setAccountDetail: (data: LoginResponseInterface) => void;
}

const CurrencyCategories = ({
  setAccountDetail,
  accountDetail,
  CurrencyType,
  setLoading,
}: CurrencyCategoriesInterface) => {
  const onChangeCurrencyChild = (currencyType: string) => {
    let data: CreateAccountInterface = {
      ...accountDetail,
      currency: currencyType,
    };
    updateAccountOperation(data, setLoading, (data) => {
      setAccountDetail(data);
      CurrencyType.setOpenBottomSheet(false);
    });
  };

  return (
    <Fragment>
      <View style={currency_categories_style.categoriesContainer}>
        <TagButton
          tagText={"Peso"}
          icon={<PesoSign />}
          onPress={() => onChangeCurrencyChild("PHP")}
        />
        <TagButton
          tagText={"USD"}
          icon={<DollarSign />}
          onPress={() => onChangeCurrencyChild("USD")}
        />
        <TagButton
          tagText={"Euro"}
          icon={<EuroSign />}
          onPress={() => onChangeCurrencyChild("EUR")}
        />
        <TagButton
          tagText={"Yen"}
          icon={<YenSign />}
          onPress={() => onChangeCurrencyChild("YEN")}
        />
      </View>
    </Fragment>
  );
};

const currency_categories_style = StyleSheet.create({
  categoriesContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 1,
  },
});

export default CurrencyCategories;
