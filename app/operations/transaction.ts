import { Alert } from "react-native";
import {
  ResponseInterface,
  transactionDefault,
  TransactionInterface,
  TransactionListFilter,
} from "../config";
import {
  CreateTransaction,
  GetAllTransaction,
} from "../service/transactions/transactions";

interface CreateTransactionParam {
  data: TransactionInterface;
  setTransactionDetails: (data: TransactionInterface) => void;
}
export const createTransaction = async ({
  data,
  setTransactionDetails,
}: CreateTransactionParam) => {
  try {
    const response: ResponseInterface = await CreateTransaction(data);
    // RETURN SUCCESS MESSAGE
    if (response.isSuccess && response.resultData) {
    }
  } catch (error: any) {
    Alert.alert("Error", "Oops, something went wrong.");
  } finally {
    setTransactionDetails(transactionDefault);
    Alert.alert("Success", "Transaction successfully added.");
  }
};

interface GetAllTransactionParam {
  data: TransactionListFilter;
  setSearchClick: (data: boolean) => void;
}

export const getAllTransaction = async ({
  data,
  setSearchClick,
}: GetAllTransactionParam) => {
  try {
    const response: ResponseInterface = await GetAllTransaction(data);
    // RETURN SUCCESS MESSAGE
    if (response.isSuccess && response.resultData) {
      return response.resultData;
    }
  } catch (error: any) {
    Alert.alert("Error", "Oops, something went wrong.");
  } finally {
    setSearchClick(false);
  }
};
