import { ResponseInterface } from "@/app/config";
import { REQUEST_URL } from "@/app/config/properties";
import axios, { AxiosError, AxiosResponse } from "axios";

export const ChatBmo = (data: string): Promise<ResponseInterface> => {
  return new Promise((resolve, reject) => {
    axios
      .post<ResponseInterface>(`${REQUEST_URL}/chat-bmo/ask-me`, {
        query: data,
      })
      .then(function (response: AxiosResponse<ResponseInterface>) {
        resolve(response.data);
      })
      .catch(function (error: AxiosError) {
        reject(error);
      });
  });
};
