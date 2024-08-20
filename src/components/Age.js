import React from "react";

const Age = (props) => {
  const { years = "--", months = "--", days = "--" } = props;
  return (
    <div className="age-info">
      <div className="age-timer-wrapper">
        <div className="age-timer">{years}</div>
        <div className="age-info">years</div>
      </div>

      <div className="age-timer-wrapper">
        <div className="age-timer">{months}</div>
        <div className="age-info">months</div>
      </div>

      <div className="age-timer-wrapper">
        <div className="age-timer">{days}</div>
        <div className="age-info">days</div>
      </div>
    </div>
  );
};

export default Age;
