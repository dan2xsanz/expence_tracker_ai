import { Alert } from "react-native";
import {
  ResponseInterface,
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
  } catch (error: any) {
    Alert.alert("Error", "Oops, something went wrong.");
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
  } catch (error: any) {
    Alert.alert("Error", "Oops, something went wrong.");
  } finally {
    setLoading(false);
    setSearchClick(false);
  }
};

export const getAllDailyExpense = async (
  setLoading: (data: boolean) => void
) => {
  try {
    setLoading(true);
    const response: ResponseInterface = await GetAllDailyExpense();
    // RETURN SUCCESS MESSAGE
    if (response.isSuccess && response.resultData) {
      return response.resultData;
    }
  } catch (error: any) {
    Alert.alert("Error", "Oops, something went wrong.");
  } finally {
    setLoading(false);
  }
};

export const getAllMonthExpense = async (
  setLoading: (data: boolean) => void
) => {
  try {
    setLoading(true);
    const response: ResponseInterface = await GetAllMonthlyExpense();
    // RETURN SUCCESS MESSAGE
    if (response.isSuccess && response.resultData) {
      return response.resultData;
    }
  } catch (error: any) {
    Alert.alert("Error", "Oops, something went wrong.");
  } finally {
    setLoading(false);
  }
};

export const getAllYearlyExpense = async (
  setLoading: (data: boolean) => void
) => {
  try {
    setLoading(true);
    const response: ResponseInterface = await GetAllYearlyExpense();
    // RETURN SUCCESS MESSAGE
    if (response.isSuccess && response.resultData) {
      return response.resultData;
    }
  } catch (error: any) {
    Alert.alert("Error", "Oops, something went wrong.");
  } finally {
    setLoading(false);
  }
};
