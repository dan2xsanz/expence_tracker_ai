import React, { Fragment } from "react";

import TagButton from "../tag-button/tag-button";
import {
  EXPENCE_CATEGORY,
  ExpenceCategoryInterface,
  TransactionInterface,
} from "@/app/config";
import { View, StyleSheet } from "react-native";

import {
  BabyCarriageIcon,
  RemittanceIcon,
  EducationIcon,
  DeliveryIcon,
  UtilityIcon,
  ElypsisIcon,
  GamesIcon,
  CableIcon,
  FoodIcon,
  CarIcon,
  GasIcon,
} from "../icons/icons";

interface ExpenceCategoriesInterface {
  transactionDetails: TransactionInterface;
  onChangeFields: (data: TransactionInterface) => void;
  Categories: any;
}

const ExpenceCategories = ({
  transactionDetails,
  onChangeFields,
  Categories,
}: ExpenceCategoriesInterface) => {
  // On Select Income Catgeory: Set the value selcted and displayed name
  const onSelectExpenseCategory = (data: ExpenceCategoryInterface) => {
    onChangeFields({ ...transactionDetails, categoryType: data.expenceId });
    Categories.setOpenBottomSheet(false);
  };

  return (
    <Fragment>
      <View style={expence_categories_style.categoriesContainer}>
        <TagButton
          tagText={EXPENCE_CATEGORY[0].expenceName}
          icon={<BabyCarriageIcon />}
          onPress={() => onSelectExpenseCategory(EXPENCE_CATEGORY[0])}
        />
        <TagButton
          tagText={EXPENCE_CATEGORY[1].expenceName}
          icon={<RemittanceIcon />}
          onPress={() => onSelectExpenseCategory(EXPENCE_CATEGORY[1])}
        />
        <TagButton
          tagText={EXPENCE_CATEGORY[2].expenceName}
          icon={<RemittanceIcon />}
          onPress={() => onSelectExpenseCategory(EXPENCE_CATEGORY[2])}
        />
        <TagButton
          tagText={EXPENCE_CATEGORY[3].expenceName}
          icon={<CableIcon />}
          onPress={() => onSelectExpenseCategory(EXPENCE_CATEGORY[3])}
        />
      </View>
      <View style={expence_categories_style.categoriesContainer}>
        <TagButton
          tagText={EXPENCE_CATEGORY[4].expenceName}
          icon={<CarIcon />}
          onPress={() => onSelectExpenseCategory(EXPENCE_CATEGORY[4])}
        />
        <TagButton
          tagText={EXPENCE_CATEGORY[5].expenceName}
          icon={<DeliveryIcon />}
          onPress={() => onSelectExpenseCategory(EXPENCE_CATEGORY[5])}
        />
        <TagButton
          tagText={EXPENCE_CATEGORY[6].expenceName}
          icon={<RemittanceIcon />}
          onPress={() => onSelectExpenseCategory(EXPENCE_CATEGORY[6])}
        />
        <TagButton
          tagText={EXPENCE_CATEGORY[7].expenceName}
          icon={<EducationIcon />}
          onPress={() => onSelectExpenseCategory(EXPENCE_CATEGORY[7])}
        />
      </View>
      <View style={expence_categories_style.categoriesContainer}>
        <TagButton
          tagText={EXPENCE_CATEGORY[8].expenceName}
          icon={<UtilityIcon />}
          onPress={() => onSelectExpenseCategory(EXPENCE_CATEGORY[8])}
        />
        <TagButton
          tagText={EXPENCE_CATEGORY[9].expenceName}
          icon={<FoodIcon />}
          onPress={() => onSelectExpenseCategory(EXPENCE_CATEGORY[9])}
        />
        <TagButton
          tagText={EXPENCE_CATEGORY[10].expenceName}
          icon={<FoodIcon />}
          onPress={() => onSelectExpenseCategory(EXPENCE_CATEGORY[10])}
        />
        <TagButton
          tagText={EXPENCE_CATEGORY[11].expenceName}
          icon={<RemittanceIcon />}
          onPress={() => onSelectExpenseCategory(EXPENCE_CATEGORY[11])}
        />
      </View>
      <View style={expence_categories_style.categoriesContainer}>
        <TagButton
          tagText={EXPENCE_CATEGORY[12].expenceName}
          icon={<RemittanceIcon />}
          onPress={() => onSelectExpenseCategory(EXPENCE_CATEGORY[12])}
        />
        <TagButton
          tagText={EXPENCE_CATEGORY[13].expenceName}
          icon={<GamesIcon />}
          onPress={() => onSelectExpenseCategory(EXPENCE_CATEGORY[13])}
        />
        <TagButton
          tagText={EXPENCE_CATEGORY[14].expenceName}
          icon={<GasIcon />}
          onPress={() => onSelectExpenseCategory(EXPENCE_CATEGORY[14])}
        />
        <TagButton
          tagText={EXPENCE_CATEGORY[15].expenceName}
          icon={<ElypsisIcon />}
          onPress={() => onSelectExpenseCategory(EXPENCE_CATEGORY[15])}
        />
      </View>
    </Fragment>
  );
};

const expence_categories_style = StyleSheet.create({
  categoriesContainer: {
    padding: 2,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default ExpenceCategories;
