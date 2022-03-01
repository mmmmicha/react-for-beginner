function KmToMiles() {
  return <h3>KM 2 M</h3>;
}
function MinutesToHours() {
  const [amount, setAmount] = React.useState(0);
  const [inverted, setInverted] = React.useState(false);
  const onChange = (event) => {
    console.log(event.target.value);
    setAmount(event.target.value);
  };
  const reset = () => setAmount(0);
  const onFlip = () => {
    reset();
    setInverted((current) => !current);
  };
  return (
    <div>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input
          value={inverted ? amount * 60 : amount}
          id="minutes"
          placeholder="Minutes"
          type="number"
          onChange={onChange}
          disabled={inverted}
        />
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          value={inverted ? amount : Math.round(amount / 60)}
          id="hours"
          placeholder="Hours"
          type="number"
          onChange={onChange}
          disabled={!inverted}
        />
      </div>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={onFlip}>{inverted ? 'Turn back' : 'Invert'}</button>
      </div>
    </div>
  );
}
