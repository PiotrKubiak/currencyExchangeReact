import { useState, useEffect } from "react";
import "./style.css";

const formatDate = (date) =>
  date.toLocaleString(undefined, {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "numeric",
    month: "long",
  });
//Funkcja, która pokazuje format daty i godziny
export const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setDate(new Date());
    }, 1000);
    //Ustawiamy tak aby nasz zegar przestawiał się co sekundę
    return () => {
      clearInterval(intervalID);
    };
  }, []);
  //Czyścimy interwał
  return <div className="clock">Dzisiaj jest {formatDate(date)}</div>;
  //Zwracamy naszą datę
};
