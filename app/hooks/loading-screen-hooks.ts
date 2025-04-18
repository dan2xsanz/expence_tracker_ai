import { useEffect, useState } from "react";

export const useLoadingScreen = () => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(loading);
  }, [loading]);

  return { loading, setLoading };
};
