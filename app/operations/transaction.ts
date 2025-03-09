import { ResponseInterface, TransactionInterface } from "../config";
import { CreateTransaction } from "../service/transactions/transactions";

export const createTransaction = async (data: TransactionInterface) => {
  try {
    const response: ResponseInterface = await CreateTransaction(data);
    // RETURN SUCCESS MESSAGE
    if (response.isSuccess && response.resultData) {
    }
  } catch (error: any) {
  } finally {
  }
};
