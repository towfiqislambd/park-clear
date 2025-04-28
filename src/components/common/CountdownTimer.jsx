import { useState } from "react";
import Countdown from "react-countdown";

const CountdownTimer = () => {

  const [targetTime, setTargetTime] = useState(Date.now() + 60 * 1000);
  const [key, setKey] = useState(0);

  const handleResendClick = () => {
    setTargetTime(Date.now() + 60 * 1000);
    setKey((prevKey) => prevKey + 1);
  };

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <span
          className=" text-theme-orange font-semibold underline text-sm rounded-[8px] cursor-pointer"
          onClick={handleResendClick}
        >
          Resend
        </span>
      );
    } else {
      return <div>{seconds}s</div>;
    }
  };
  return (
    <div>
      <Countdown key={key} date={targetTime} renderer={renderer} />
    </div>
  );
};

export default CountdownTimer;
