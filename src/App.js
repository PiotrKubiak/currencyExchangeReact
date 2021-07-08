function App() {
  return (
    <div className="wrapper">
      <form className="form js-form">
        <fieldset className="form__fieldset">
          <legend className="form__legend">KALKULATOR WALUT</legend>
          <p className="form__paragraph">
            <label className="form__label">
              <span className="form__span">Ilość w zł</span>
              <input
                step="any"
                min="0"
                className="form__field js-amount"
                type="number"
                autofocus
                required
                placeholder="Wpisz kwotę"
              ></input>
            </label>
          </p>
          <p className="form__paragraph">
            <label className="form__label">
              <span className="form__span">Przelicz na</span>
              <select className="form__field js-currency" required>
                <option value="EUR">EUR (EURO)</option>
                <option value="GBP">GBP (FUNT BRYTYJSKI)</option>
                <option value="USD">USD (DOLAR USA)</option>
                <option value="NOK">NOK (KORONA NORWESKA)</option>
                <option value="SEK">SEK (KORONA SZWEDZKA)</option>
                <option value="CHF">CHF (FRANK SZWAJCARSKI)</option>
              </select>
            </label>
          </p>
          <div className="form__buttons">
            <button className="form__button" type="submit">
              Przelicz
            </button>
            <button className="form__button form__button--reset" type="reset">
              Reset
            </button>
          </div>
          <div className="form__result js-result"></div>
        </fieldset>
        <footer>
          <div className="form__footer">
            <a
              className="form__link"
              target="_blank"
              href="https://mybank.pl/kursy-walut/"
            >
              AKTUALNE KURSY WALUT
            </a>
          </div>
        </footer>
      </form>
    </div>
  );
}

export default App;
