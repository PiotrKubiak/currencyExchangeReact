import React, { useState } from "react";
import "./App.css";
import { Form } from "./Form";
import { currencies } from ".currencies";

function App() {
  const [rseult, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ short }) => short === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };
}
