import React, { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import "./style.css";
// Jedyny komponent który używa result
export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].short); //Currency użytkownik wybiera z listy walut. Też importujemy currencies ponieważ chcemy je wypisac jako options, wybieramy domyśną 1 walutę z listy
  const [amount, setAmount] = useState(""); // Amount użytkownik wpisuje (złotówki) początkowa wartość to jest pusty łańcuch znaków

  const onSubmit = (event) => {
    // Tylko wywołuje calculateResult przekazując currency i amount, którą dostał w propsach
    event.preventDefault(); // blokowanie wysłania formularza
    calculateResult(currency, amount);
  };
  // Tutaj zapisujemy co po kolei ma znajdować się na stronie
  return (
    <form className="form" onSubmit={onSubmit}>
      <h1 className="form__header">🤑KALKULATOR WALUT🤑</h1>
      <p>
        <label>
          <span className="form__labelText">PLN*:</span>
          <input
            value={amount}
            onChange={({ target }) => setAmount(target.value)} // Przekazujemy klasyczny onChange handler value, chodzi o to żeby było zgodne z tą zmienną stanu amount
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
            value={currency} // Przekazujemy value currency
            onChange={({ target }) => setCurrency(target.value)} // onChange klasycznie,
          >
            {currencies.map((currency) => (
              <option key={currency.short} value={currency.short}>
                {currency.name}
              </option> //generujemy na podstawie tej samej tablicy currencies, każde currecies zamieni się w option, wyświetlane będzie currency.name, generuje te options na podstawie currencies
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
