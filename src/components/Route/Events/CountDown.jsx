import React, { useEffect, useState } from "react";
import styles from "../../../styles/styles";

const CountDown = ({ data }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const difference = +new Date(data?.Finish_Date) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }

  const timerComponents = Object.keys(timeLeft).map((interval) => {
  if (!timeLeft[interval]) {
    return null;
  }

  return (
    <span
      key={interval}
      className="text-[25px] text-[#C59B6D]"
    >
      {timeLeft[interval]} {interval}&nbsp;
    </span>
  );
});

  
  return (
    <div>
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span className="text-[#D64545] text-[25px]"> Time's Up!</span>
      )}
    </div>
  );
};

export default CountDown;
