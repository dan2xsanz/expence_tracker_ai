import {
  ExpenceCategoryInterface,
  IncomeCategoryInterface,
  PaymentMethodInterface,
} from "./expence_tracker_interface";

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
    expenceName: "Business Expense",
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
    expenceName: "Delivery Services",
    expenceId: 5,
  },
  {
    expenceName: "Credit Card Payment",
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
    expenceName: "Foreign Exchange",
    expenceId: 11,
  },
  {
    expenceName: "Fund Trasfer",
    expenceId: 12,
  },
  {
    expenceName: "Games and Gaming",
    expenceId: 13,
  },
  {
    expenceName: "Gas",
    expenceId: 14,
  },
  {
    expenceName: "Grab",
    expenceId: 15,
  },
];
