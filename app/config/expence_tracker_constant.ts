import moment from "moment";
import {
  CreateAccountInterface,
  ExpenceCategoryInterface,
  IncomeCategoryInterface,
  PaymentMethodInterface,
  TransactionInterface,
  TransactionListFilter,
} from "./expence_tracker_interface";

export const accountDefault: CreateAccountInterface = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

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

export const transactioFilternDefault: TransactionListFilter = {
  transactionType: undefined,
  categoryType: undefined,
  note: "",
  dateFrom: moment().subtract(1, "month"),
  dateTo: moment(),
  paymentType: undefined,
  accountId: undefined,
};

export const INCOME_CATEGORY: IncomeCategoryInterface[] = [
  {
    categoryName: "Allowance",
    categoryId: 0,
  },
  {
    categoryName: "Cash Savings",
    categoryId: 1,
  },
  {
    categoryName: "Extra Income",
    categoryId: 2,
  },
  {
    categoryName: "Fund Transfer",
    categoryId: 3,
  },
  {
    categoryName: "Government Aid",
    categoryId: 4,
  },
  {
    categoryName: "Insurance",
    categoryId: 5,
  },
  {
    categoryName: "Pension",
    categoryId: 6,
  },
  {
    categoryName: "Remittance",
    categoryId: 7,
  },
  {
    categoryName: "Salary",
    categoryId: 8,
  },
  {
    categoryName: "Stocks/Crypto",
    categoryId: 9,
  },
  {
    categoryName: "Others",
    categoryId: 10,
  },
];

export const PAYMENT_CATEGORY: PaymentMethodInterface[] = [
  {
    paymentName: "Bank Transfer",
    paymentId: 0,
  },
  {
    paymentName: "Cash",
    paymentId: 1,
  },
  {
    paymentName: "Check",
    paymentId: 2,
  },
  {
    paymentName: "Credit Card",
    paymentId: 3,
  },
  {
    paymentName: "Crypto",
    paymentId: 4,
  },
  {
    paymentName: "Debit Card",
    paymentId: 5,
  },
  {
    paymentName: "E Wallet",
    paymentId: 6,
  },
  {
    paymentName: "Financing",
    paymentId: 7,
  },
  {
    paymentName: "Loyalty Points",
    paymentId: 8,
  },
  {
    paymentName: "Others",
    paymentId: 9,
  },
];

export const EXPENCE_CATEGORY: ExpenceCategoryInterface[] = [
  {
    expenceName: "Baby Stuff",
    expenceId: 0,
  },
  {
    expenceName: "Bills",
    expenceId: 1,
  },
  {
    expenceName: "Business",
    expenceId: 2,
  },
  {
    expenceName: "Cable",
    expenceId: 3,
  },
  {
    expenceName: "Car",
    expenceId: 4,
  },
  {
    expenceName: "Delivery",
    expenceId: 5,
  },
  {
    expenceName: "Credit",
    expenceId: 6,
  },
  {
    expenceName: "Educational",
    expenceId: 7,
  },
  {
    expenceName: "Utility Bill",
    expenceId: 8,
  },
  {
    expenceName: "Food",
    expenceId: 9,
  },
  {
    expenceName: "Food Delivery",
    expenceId: 10,
  },
  {
    expenceName: "Foreign ",
    expenceId: 11,
  },
  {
    expenceName: "Fund ",
    expenceId: 12,
  },
  {
    expenceName: "Gaming",
    expenceId: 13,
  },
  {
    expenceName: "Gas",
    expenceId: 14,
  },
  {
    expenceName: "Other",
    expenceId: 15,
  },
];
