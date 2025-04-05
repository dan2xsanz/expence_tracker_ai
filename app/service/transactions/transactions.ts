import {
  ResponseInterface,
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

export const GetAllDailyExpense = (): Promise<ResponseInterface> => {
  return new Promise((resolve, reject) => {
    axios
      .get<ResponseInterface>(`${REQUEST_URL}/transaction/daily-expense`)
      .then(function (response: AxiosResponse<ResponseInterface>) {
        resolve(response.data);
      })
      .catch(function (error: AxiosError) {
        reject(error);
      });
  });
};

export const GetAllMonthlyExpense = (): Promise<ResponseInterface> => {
  return new Promise((resolve, reject) => {
    axios
      .get<ResponseInterface>(`${REQUEST_URL}/transaction/monthly-expense`)
      .then(function (response: AxiosResponse<ResponseInterface>) {
        resolve(response.data);
      })
      .catch(function (error: AxiosError) {
        reject(error);
      });
  });
};
