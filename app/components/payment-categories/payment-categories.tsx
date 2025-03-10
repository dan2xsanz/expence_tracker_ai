import React, { Fragment } from "react";
import { View, StyleSheet } from "react-native";
import TagButton from "../tag-button/tag-button";
import {
  CreditCardIcon,
  ElypsisIcon,
  MoneyCheckIcon,
  RemittanceIcon,
  SackMoneyIcon,
  SavingIcon,
  StocksIcon,
} from "../icons/icons";
import { PAYMENT_CATEGORY } from "@/app/config/expence_tracker_constant";
import { PaymentMethodInterface, TransactionInterface } from "@/app/config";

interface PaymentCategoriesInterface {
  transactionDetails: TransactionInterface;
  onChangeFields: (data: TransactionInterface) => void;
  PaymentMethod: any;
}

const PaymentCategories = ({
  transactionDetails,
  onChangeFields,
  PaymentMethod,
}: PaymentCategoriesInterface) => {
  // On Select Payment Method: Set the value selcted and displayed name
  const onSelectPaymentMethod = (data: PaymentMethodInterface) => {
    onChangeFields({ ...transactionDetails, paymentType: data.paymentId });
    PaymentMethod.setOpenBottomSheet(false);
  };

  return (
    <Fragment>
      <View style={payment_categories_style.categoriesContainer}>
        <TagButton
          icon={<RemittanceIcon />}
          tagText={PAYMENT_CATEGORY[0].paymentName}
          onPress={() => onSelectPaymentMethod(PAYMENT_CATEGORY[0])}
        />
        <TagButton
          icon={<SackMoneyIcon />}
          tagText={PAYMENT_CATEGORY[1].paymentName}
          onPress={() => onSelectPaymentMethod(PAYMENT_CATEGORY[1])}
        />
        <TagButton
          icon={<MoneyCheckIcon />}
          tagText={PAYMENT_CATEGORY[2].paymentName}
          onPress={() => onSelectPaymentMethod(PAYMENT_CATEGORY[2])}
        />
        <TagButton
          icon={<CreditCardIcon />}
          tagText={PAYMENT_CATEGORY[3].paymentName}
          onPress={() => onSelectPaymentMethod(PAYMENT_CATEGORY[3])}
        />
      </View>
      <View style={payment_categories_style.categoriesContainer}>
        <TagButton
          icon={<StocksIcon />}
          tagText={PAYMENT_CATEGORY[4].paymentName}
          onPress={() => onSelectPaymentMethod(PAYMENT_CATEGORY[4])}
        />
        <TagButton
          icon={<CreditCardIcon />}
          tagText={PAYMENT_CATEGORY[5].paymentName}
          onPress={() => onSelectPaymentMethod(PAYMENT_CATEGORY[5])}
        />
        <TagButton
          icon={<SavingIcon />}
          tagText={PAYMENT_CATEGORY[6].paymentName}
          onPress={() => onSelectPaymentMethod(PAYMENT_CATEGORY[6])}
        />
        <TagButton
          icon={<RemittanceIcon />}
          tagText={PAYMENT_CATEGORY[7].paymentName}
          onPress={() => onSelectPaymentMethod(PAYMENT_CATEGORY[7])}
        />
      </View>
      <View style={payment_categories_style.categoriesContainer}>
        <TagButton
          icon={<RemittanceIcon />}
          tagText={PAYMENT_CATEGORY[8].paymentName}
          onPress={() => onSelectPaymentMethod(PAYMENT_CATEGORY[8])}
        />
        <TagButton
          icon={<ElypsisIcon />}
          tagText={PAYMENT_CATEGORY[9].paymentName}
          onPress={() => onSelectPaymentMethod(PAYMENT_CATEGORY[9])}
        />
        <TagButton tagText={""} icon={<></>} disabled />
        <TagButton tagText={""} icon={<></>} disabled />
      </View>
    </Fragment>
  );
};

const payment_categories_style = StyleSheet.create({
  categoriesContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 2,
  },
});

export default PaymentCategories;
