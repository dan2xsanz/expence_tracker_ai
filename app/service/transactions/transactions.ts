import {
  ResponseInterface,
  TotalTransactionInterface,
  TransactionInterface,
  TransactionListFilter,
} from "@/app/config";
import { REQUEST_URL } from "@/app/config/properties";
import axios, { AxiosError, AxiosResponse } from "axios";

export const CreateTransaction = (
  data: TransactionInterface
): Promise<ResponseInterface> => {
  return new Promise((resolve, reject) => {
    axios
      .post<ResponseInterface>(
        `${REQUEST_URL}/transaction/add-transaction`,
        data
      )
      .then(function (response: AxiosResponse<ResponseInterface>) {
        resolve(response.data);
      })
      .catch(function (error: AxiosError) {
        reject(error);
      });
  });
};

export const GetAllTransaction = (
  data: TransactionListFilter
): Promise<ResponseInterface> => {
  return new Promise((resolve, reject) => {
    axios
      .post<ResponseInterface>(
        `${REQUEST_URL}/transaction/all-transaction`,
        data
      )
      .then(function (response: AxiosResponse<ResponseInterface>) {
        resolve(response.data);
      })
      .catch(function (error: AxiosError) {
        reject(error);
      });
  });
};

export const GetAllDailyExpense = (
  accountMasterId: number | undefined
): Promise<ResponseInterface> => {
  return new Promise((resolve, reject) => {
    axios
      .get<ResponseInterface>(
        `${REQUEST_URL}/transaction/daily-expense/${accountMasterId}`
      )
      .then(function (response: AxiosResponse<ResponseInterface>) {
        resolve(response.data);
      })
      .catch(function (error: AxiosError) {
        reject(error);
      });
  });
};

export const GetAllMonthlyExpense = (
  accountMasterId: number | undefined
): Promise<ResponseInterface> => {
  return new Promise((resolve, reject) => {
    axios
      .get<ResponseInterface>(
        `${REQUEST_URL}/transaction/monthly-expense/${accountMasterId}`
      )
      .then(function (response: AxiosResponse<ResponseInterface>) {
        resolve(response.data);
      })
      .catch(function (error: AxiosError) {
        reject(error);
      });
  });
};

export const GetAllYearlyExpense = (
  accountMasterId: number | undefined
): Promise<ResponseInterface> => {
  return new Promise((resolve, reject) => {
    axios
      .get<ResponseInterface>(
        `${REQUEST_URL}/transaction/yearly-expense/${accountMasterId}`
      )
      .then(function (response: AxiosResponse<ResponseInterface>) {
        resolve(response.data);
      })
      .catch(function (error: AxiosError) {
        reject(error);
      });
  });
};

export const GetTotalTransactions = (
  data: TotalTransactionInterface
): Promise<ResponseInterface> => {
  return new Promise((resolve, reject) => {
    axios
      .post<ResponseInterface>(
        `${REQUEST_URL}/transaction/total-transactions`,
        data
      )
      .then(function (response: AxiosResponse<ResponseInterface>) {
        resolve(response.data);
      })
      .catch(function (error: AxiosError) {
        reject(error);
      });
  });
};
