import { TransactionType } from "./expence_tracker_enums";

import moment, { Moment } from "moment";
export interface TransactionInterface {
  id: number | undefined;
  transactionType: TransactionType | undefined;
  amountValue: number | undefined;
  categoryType: number | undefined;
  note: string;
  date: Moment | undefined;
  time: Moment | undefined;

  paymentType: number | undefined;
}

export const transactionDefault: TransactionInterface = {
  id: undefined,
  transactionType: undefined,
  amountValue: undefined,
  categoryType: undefined,
  note: "",
  date: moment(),
  time: moment().startOf("second"),
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

export interface ResponseInterface {
  isSuccess: boolean;
  message: string;
  messageParams: any;
  resultData: any;
  errorMessages: string[];
  errorCodes: any;
  exceptionType: string;
}
