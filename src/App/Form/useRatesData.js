import { useEffect, useState } from "react";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading",
  });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(
          "https://api.exchangerate.host/latest?base=PLN"
        );

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const { ratesData, date } = await response.json();

        setRatesData({
          state: "success",
          ratesData,
          date,
        });
      } catch {
        setRatesData({
          state: "error",
        });
      }
    };
    setTimeout(fetchRates, 1500);
  }, []);

  return ratesData;
};
