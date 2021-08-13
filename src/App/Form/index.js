import React, { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import "./style.css";

export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <h1 className="form__header">🤑KALKULATOR WALUT🤑</h1>
      <p>
        <label>
          <span className="form__labelText">PLN*:</span>
          <input
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            placeholder="Wprowadź kwotę w złotówkach"
            className="form__field"
            type="number"
            required
            step="0.01"
          />
        </label>
      </p>
      <p>
        <label>
          <span className="form__labelText">Waluta:</span>
          <select
            className="form__field"
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency.short} value={currency.short}>
                {currency.name}
              </option>
            ))}
          </select>
        </label>
      </p>
      <p>
        <button className="form__button">Przelicz</button>
      </p>

      <p className="form__info">
        Kursy pochodzą z: <a href="https://mybank.pl/kursy-walut/">mybank.pl</a>{" "}
        z dnia 11.07.2021
      </p>
      <Result result={result} />
    </form>
  );
};
