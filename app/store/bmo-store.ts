import { persist, createJSONStorage } from "zustand/middleware";
import { transactionDefault, TransactionInterface } from "../config";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { create } from "zustand";

type BmoStore = {
  transactionDetail: TransactionInterface;
  setTransactionDetail: (data: TransactionInterface) => void;
  resetBmoStore: () => void;
};

export const useBmoStore = create<BmoStore>()(
  persist(
    (set) => ({
      transactionDetail: transactionDefault,
      setTransactionDetail: (transactionDetail) => set({ transactionDetail }),
      resetBmoStore: () => set({ transactionDetail: transactionDefault }),
    }),
    {
      name: "bmoStore", // key in AsyncStorage
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
