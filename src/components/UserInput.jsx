const UserInput = ({handleChange, userInput}) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            onChange={handleChange}
            value={userInput.initialInvestment}
            type="number"
            name="initialInvestment"
            required
          />
        </p>
        <p>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input
            onChange={handleChange}
            value={userInput.annualInvestment}
            type="number"
            name="annualInvestment"
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input
            onChange={handleChange}
            value={userInput.expectedReturn}
            type="number"
            name="expectedReturn"
            required
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            onChange={handleChange}
            value={userInput.duration}
            type="number"
            name="duration"
            required
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
