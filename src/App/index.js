import React, { useState } from "react";
import "./App.css";
import { Form } from "./Form";
import { currencies } from "./currencies";

function App() {
  const [result, setResult] = useState(); //Zadeklarowaliśmy sobie zmienną stanową result (będzie to obiekt ponieważ musimy wypisać ile było wcześniej ile jest teraz i jaka waluta została przeliczona),

  const calculateResult = (currency, amount) => {
    // funkcja, która szuka (metoda find) wśród tablicy walut (currencies) short taki jaki ma waluta i wyciągamy z niej rate
    const rate = currencies.find(({ short }) => short === currency).rate;

    setResult({
      //nasz obiekt który ma 3 właściwości, które będą wypisane w wyniku
      sourceAmount: +amount, //Zmiana na liczbę
      targetAmount: amount / rate, // Działanie żeby przeliczyć targetAmount
      currency, //Waluta
    });
  };

  return (
    <div className="app">
      <Form result={result} calculateResult={calculateResult} />
    </div>
  ); //W tej aplikacji jest wyłącznie Form do którego przekazujemy result i calculateResult
}

export default App;
