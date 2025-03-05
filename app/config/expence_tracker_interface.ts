import { TransactionType } from "./expence_tracker_enums";

export interface TransactionInterface {
  id: number | undefined;
  transactionType: TransactionType | undefined;
  amount: number;
  categoryType: number | undefined;
  note: string;
  date: Date;
  time: Date;
  paymentType: number | undefined;
}

export const transactionDefault: TransactionInterface = {
  id: undefined,
  transactionType: undefined,
  amount: 0,
  categoryType: undefined,
  note: "",
  date: new Date(),
  time: new Date(),
  paymentType: undefined,
};

export interface IncomeCategoryInterface {
  categoryName: string;
  categoryId: number;
}

export interface PaymentMethodInterface {
  paymentName: string;
  paymentId: number;
}

export interface ExpenceCategoryInterface {
  expenceName: string;
  expenceId: number;
}
