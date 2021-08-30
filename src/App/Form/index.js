import React, { useState } from "react";
import { Result } from "./Result";
import {
  Button,
  Field,
  Header,
  Info,
  LabelText,
  Loading,
  Failure,
} from "./styled";

import { useRatesData } from "./useRatesData";

export const Form = () => {
  const [result, setResult] = useState();
  const ratesData = useRatesData();

  const calculateResult = (currency, amount) => {
    const rate = ratesData.rates[currency];

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  };

  const [currency, setCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <form onSubmit={onSubmit}>
      <Header>KALKULATOR WALUT</Header>
      {ratesData.state === "loading" ? (
        <Loading>
          Momencik 😅 <br />
          Ładujemy dane z Europejskiego Banku Centralnego
        </Loading>
      ) : ratesData.state === "error" ? (
        <Failure>
          Ojjj coś poszło nie tak 😒 <br />
          Proszę sprawdzić czy jesteś podłączony do sieci
        </Failure>
      ) : (
        <>
          <p>
            <label>
              <LabelText>PLN*:</LabelText>
              <Field
                value={amount}
                onChange={({ target }) => setAmount(target.value)}
                placeholder="Wprowadź kwotę w złotówkach"
                type="number"
                required
                step="0.01"
              />
            </label>
          </p>
          <p>
            <label>
              <LabelText>Waluta:</LabelText>
              <Field
                as="select"
                value={currency}
                onChange={({ target }) => setCurrency(target.value)}
              >
                {Object.keys(ratesData.rates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </Field>
            </label>
          </p>
          <p>
            <Button>Przelicz</Button>
          </p>

          <Info>
            Kursy walut pobierane są z Europejskiego Banku Centralnego.
          </Info>

          <Result result={result} />
        </>
      )}
    </form>
  );
};
