import React from "react";

const DateInput = (props) => {
  const { ageInput, setAgeInput } = props;

  return (
    <div className="age-input">
      <div className="date-input-wrapper">
        <label className="date-input-type">day</label>
        <input
          className="date-input"
          type="number"
          value={ageInput.day}
          placeholder="DD"
          onChange={() => {}}
        />
      </div>

      <div className="date-input-wrapper">
        <label className="date-input-type">month</label>
        <input
          className="date-input"
          type="number"
          value={ageInput.month}
          placeholder="MM"
          onChange={() => {}}
        />
      </div>

      <div className="date-input-wrapper">
        <label className="date-input-type">year</label>
        <input
          className="date-input"
          type="number"
          value={ageInput.year}
          placeholder="YYYY"
          onChange={() => {}}
        />
      </div>
    </div>
  );
};

export default DateInput;
