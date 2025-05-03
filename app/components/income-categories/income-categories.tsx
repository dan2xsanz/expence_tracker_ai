import { IncomeCategoryInterface, TransactionInterface } from "@/app/config";
import { INCOME_CATEGORY } from "@/app/config/expence_tracker_constant";
import TagButton from "../tag-button/tag-button";
import { View, StyleSheet } from "react-native";
import React, { Fragment } from "react";
import {
  RemittanceIcon,
  GovernmentIcon,
  SackMoneyIcon,
  InsuranceIcon,
  ElypsisIcon,
  PensionIcon,
  SavingIcon,
  StocksIcon,
} from "../icons/icons";

interface IncomeCategoriesInterface {
  transactionDetails?: TransactionInterface;
  onChangeFields: (data: TransactionInterface) => void;
  Categories: any;
}

const IncomeCategories = ({
  Categories,
  onChangeFields,
  transactionDetails,
}: IncomeCategoriesInterface) => {
  // On Select Income Catgeory:: Set the value selcted and displayed name
  const onSelectIncomeCategory = (data: IncomeCategoryInterface) => {
    // ON CHANGE TRANSACTION DETAILS
    transactionDetails &&
      onChangeFields({ ...transactionDetails, categoryType: data.categoryId });
    Categories.setOpenBottomSheet(false);
  };

  return (
    <Fragment>
      <View style={income_categories_style.categoriesContainer}>
        <TagButton
          tagText={INCOME_CATEGORY[0].categoryName}
          icon={<SackMoneyIcon />}
          onPress={() => onSelectIncomeCategory(INCOME_CATEGORY[0])}
        />
        <TagButton
          tagText={INCOME_CATEGORY[1].categoryName}
          icon={<SavingIcon />}
          onPress={() => onSelectIncomeCategory(INCOME_CATEGORY[1])}
        />
        <TagButton
          tagText={INCOME_CATEGORY[2].categoryName}
          icon={<SackMoneyIcon />}
          onPress={() => onSelectIncomeCategory(INCOME_CATEGORY[2])}
        />
        <TagButton
          tagText={INCOME_CATEGORY[3].categoryName}
          icon={<SackMoneyIcon />}
          onPress={() => onSelectIncomeCategory(INCOME_CATEGORY[3])}
        />
      </View>
      <View style={income_categories_style.categoriesContainer}>
        <TagButton
          tagText={INCOME_CATEGORY[4].categoryName}
          icon={<GovernmentIcon />}
          onPress={() => onSelectIncomeCategory(INCOME_CATEGORY[4])}
        />
        <TagButton
          tagText={INCOME_CATEGORY[5].categoryName}
          icon={<InsuranceIcon />}
          onPress={() => onSelectIncomeCategory(INCOME_CATEGORY[5])}
        />
        <TagButton
          tagText={INCOME_CATEGORY[6].categoryName}
          icon={<PensionIcon />}
          onPress={() => onSelectIncomeCategory(INCOME_CATEGORY[6])}
        />
        <TagButton
          tagText={INCOME_CATEGORY[7].categoryName}
          icon={<RemittanceIcon />}
          onPress={() => onSelectIncomeCategory(INCOME_CATEGORY[7])}
        />
      </View>
      <View style={income_categories_style.categoriesContainer}>
        <TagButton
          tagText={INCOME_CATEGORY[8].categoryName}
          icon={<SackMoneyIcon />}
          onPress={() => onSelectIncomeCategory(INCOME_CATEGORY[8])}
        />
        <TagButton
          tagText={INCOME_CATEGORY[9].categoryName}
          icon={<StocksIcon />}
          onPress={() => onSelectIncomeCategory(INCOME_CATEGORY[9])}
        />
        <TagButton
          tagText={INCOME_CATEGORY[10].categoryName}
          icon={<ElypsisIcon />}
          onPress={() => onSelectIncomeCategory(INCOME_CATEGORY[10])}
        />
        <TagButton tagText={""} icon={<></>} disabled />
      </View>
    </Fragment>
  );
};

const income_categories_style = StyleSheet.create({
  categoriesContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 2,
  },
});

export default IncomeCategories;
