import React, { useEffect, useState } from "react";

const Counter = (props) => {
  //Enter date in MM/DD/YYYY format
  const calculateTimeLeft = () => {
    let difference = +new Date(`${props.date}`) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        // seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <p className="lg:text-3xl text-1xls text-slate-100 text-center uppercase font-bold">
      {timerComponents}
      <br />
      <span className="text-lg py-0">FOR</span>
    </p>
  );
};

export default Counter;
