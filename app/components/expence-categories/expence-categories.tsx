import React, { Fragment } from "react";

import { View, StyleSheet } from "react-native";
import TagButton from "../tag-button/tag-button";
import { EXPENCE_CATEGORY } from "@/app/config";
const ExpenceCategories = () => {
  return (
    <Fragment>
      <View style={expence_categories_style.categoriesContainer}>
        <TagButton
          tagText={EXPENCE_CATEGORY[0].expenceName}
          icon={<></>}
          onPress={() => {}}
        />
        <TagButton
          tagText={EXPENCE_CATEGORY[1].expenceName}
          icon={<></>}
          onPress={() => {}}
        />
        <TagButton
          tagText={EXPENCE_CATEGORY[2].expenceName}
          icon={<></>}
          onPress={() => {}}
        />
        <TagButton
          tagText={EXPENCE_CATEGORY[3].expenceName}
          icon={<></>}
          onPress={() => {}}
        />
      </View>
      <View style={expence_categories_style.categoriesContainer}>
        <TagButton
          tagText={EXPENCE_CATEGORY[4].expenceName}
          icon={<></>}
          onPress={() => {}}
        />
        <TagButton
          tagText={EXPENCE_CATEGORY[5].expenceName}
          icon={<></>}
          onPress={() => {}}
        />
        <TagButton
          tagText={EXPENCE_CATEGORY[6].expenceName}
          icon={<></>}
          onPress={() => {}}
        />
        <TagButton
          tagText={EXPENCE_CATEGORY[7].expenceName}
          icon={<></>}
          onPress={() => {}}
        />
      </View>
      <View style={expence_categories_style.categoriesContainer}>
        <TagButton
          tagText={EXPENCE_CATEGORY[8].expenceName}
          icon={<></>}
          onPress={() => {}}
        />
        <TagButton
          tagText={EXPENCE_CATEGORY[9].expenceName}
          icon={<></>}
          onPress={() => {}}
        />
        <TagButton
          tagText={EXPENCE_CATEGORY[10].expenceName}
          icon={<></>}
          onPress={() => {}}
        />
        <TagButton
          tagText={EXPENCE_CATEGORY[11].expenceName}
          icon={<></>}
          onPress={() => {}}
        />
      </View>
      <View style={expence_categories_style.categoriesContainer}>
        <TagButton
          tagText={EXPENCE_CATEGORY[12].expenceName}
          icon={<></>}
          onPress={() => {}}
        />
        <TagButton
          tagText={EXPENCE_CATEGORY[13].expenceName}
          icon={<></>}
          onPress={() => {}}
        />
        <TagButton
          tagText={EXPENCE_CATEGORY[14].expenceName}
          icon={<></>}
          onPress={() => {}}
        />
        <TagButton
          tagText={EXPENCE_CATEGORY[15].expenceName}
          icon={<></>}
          onPress={() => {}}
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
