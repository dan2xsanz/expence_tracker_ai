import { TransactionType } from "./expence_tracker_enums";

import { Moment } from "moment";

export interface ResponseInterface {
  isSuccess: boolean;
  message: string;
  messageParams: any;
  resultData: any;
  errorMessages: string[];
  errorCodes: any;
  exceptionType: string;
}

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

// TRANSACTION LIST FILTER INTERFACE
export interface TransactionListFilter {
  transactionType: TransactionType | undefined;
  categoryType: number | undefined;
  note: string;
  dateFrom: Moment;
  dateTo: Moment;
  paymentType: number | undefined;
  accountId: number | undefined;
}

// TRANSACTION DATA INTERFACE
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
