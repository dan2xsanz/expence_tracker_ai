import { Alert } from "react-native";
import {
  ResponseInterface,
  TotalTransactionInterface,
  transactionDefault,
  TransactionInterface,
  TransactionListFilter,
} from "../config";
import {
  CreateTransaction,
  GetAllDailyExpense,
  GetAllMonthlyExpense,
  GetAllTransaction,
  GetAllYearlyExpense,
  GetTotalTransactions,
} from "../service/transactions/transactions";

interface CreateTransactionParam {
  data: TransactionInterface;
  setLoading: (data: boolean) => void;
  setTransactionDetails: (data: TransactionInterface) => void;
}

export const createTransaction = async ({
  data,
  setLoading,
  setTransactionDetails,
}: CreateTransactionParam) => {
  try {
    setLoading(true);
    const response: ResponseInterface = await CreateTransaction(data);
    // RETURN SUCCESS MESSAGE
    if (response.isSuccess && response.resultData) {
    }
  } finally {
    setLoading(false);
    setTransactionDetails(transactionDefault);
    Alert.alert("Success", "Transaction successfully added.");
  }
};

interface GetAllTransactionParam {
  data: TransactionListFilter;
  setSearchClick: (data: boolean) => void;
  setLoading: (data: boolean) => void;
}

export const getAllTransaction = async ({
  data,
  setLoading,
  setSearchClick,
}: GetAllTransactionParam) => {
  try {
    setLoading(true);
    const response: ResponseInterface = await GetAllTransaction(data);
    // RETURN SUCCESS MESSAGE
    if (response.isSuccess && response.resultData) {
      return response.resultData;
    }
  } finally {
    setLoading(false);
    setSearchClick(false);
  }
};

export const getAllDailyExpense = async (
  setLoading: (data: boolean) => void,
  accountMasterId: number | undefined
) => {
  try {
    setLoading(true);
    const response: ResponseInterface = await GetAllDailyExpense(
      accountMasterId
    );
    // RETURN SUCCESS MESSAGE
    if (response.isSuccess && response.resultData) {
      return response.resultData;
    }
  } finally {
    setLoading(false);
  }
};

export const getAllMonthExpense = async (
  setLoading: (data: boolean) => void,
  accountMasterId: number | undefined
) => {
  try {
    setLoading(true);
    const response: ResponseInterface = await GetAllMonthlyExpense(
      accountMasterId
    );
    // RETURN SUCCESS MESSAGE
    if (response.isSuccess && response.resultData) {
      return response.resultData;
    }
  } finally {
    setLoading(false);
  }
};

export const getAllYearlyExpense = async (
  setLoading: (data: boolean) => void,
  accountMasterId: number | undefined
) => {
  try {
    setLoading(true);
    const response: ResponseInterface = await GetAllYearlyExpense(
      accountMasterId
    );
    // RETURN SUCCESS MESSAGE
    if (response.isSuccess && response.resultData) {
      return response.resultData;
    }
  } finally {
    setLoading(false);
  }
};

export const getTotalTransactions = async (
  data: TotalTransactionInterface,
  setLoading: (data: boolean) => void
) => {
  try {
    setLoading(true);
    const response: ResponseInterface = await GetTotalTransactions(data);
    // RETURN SUCCESS MESSAGE
    if (response.isSuccess && response.resultData) {
      return response.resultData;
    }
  } finally {
    setLoading(false);
  }
};
