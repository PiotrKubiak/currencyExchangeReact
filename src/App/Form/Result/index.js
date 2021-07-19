import "./style.css";

export const Result = ({ result }) => (
  <p className="result">
    {result !== undefined && (
      <>
        {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;={" "}
        <strong>
          {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
        </strong>
      </>
    )}
  </p>
);

// komponent w którym przyjmowany jest tylko result
// Jeżeli jest undefined czyli na początku to wtedy nie generuje się nic, a jeżeli result jest podany to wtedy zostanie wygenerowany taki text
//{" "} łamie nam spację jeśli się nie mieści przeniesie do nowej linii
// Jest tu użyta specjalna encja żeby się nie złamała spacja
