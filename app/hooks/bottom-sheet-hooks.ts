import { useEffect, useState } from "react";

export const useBottomSheet = () => {
  // OPEN
  const [openBottomSheet, setOpenBottomSheet] = useState<boolean>(false);

  // SELECTED
  const [selected, setSelected] = useState<number>(0);

  useEffect(() => {
    setOpenBottomSheet(openBottomSheet);
  }, [openBottomSheet]);

  useEffect(() => {
    setSelected(selected);
  }, [selected]);

  return {
    openBottomSheet,
    setOpenBottomSheet,
    selected,
    setSelected,
  };
};
