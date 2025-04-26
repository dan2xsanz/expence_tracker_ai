import AsyncStorage from "@react-native-async-storage/async-storage";
import { persist, createJSONStorage } from "zustand/middleware";
import {
  LoginResponseInterface,
  TransactionInterface,
  accountDetailDefault,
  transactionDefault,
} from "../config";

import { create } from "zustand";

type BmoStore = {
  transactionDetail: TransactionInterface;
  setTransactionDetail: (data: TransactionInterface) => void;
  accountDetail: LoginResponseInterface;
  setAccountDetail: (data: LoginResponseInterface) => void;
  resetBmoStore: () => void;
};

export const useBmoStore = create<BmoStore>()(
  persist(
    (set) => ({
      transactionDetail: transactionDefault,
      setTransactionDetail: (transactionDetail) => set({ transactionDetail }),
      accountDetail: accountDetailDefault,
      setAccountDetail: (accountDetail) => set({ accountDetail }),
      resetBmoStore: () => set({ transactionDetail: transactionDefault }),
    }),
    {
      name: "bmoStore", // key in AsyncStorage
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
