import { useState, useEffect, useCallback } from "react";
import { Slide } from "react-awesome-reveal";

import CountdownItem from "./CountdownItem";

const Timer = () => {
  const [time, setTime] = useState({
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
  });
  const getTimeUntil = useCallback((deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      console.log("over");
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));

      setTime({
        days,
        hours,
        minutes,
        seconds,
      });

      console.log(seconds, minutes, hours, days);
    }
  }, []);

  useEffect(() => {
    setInterval(() => getTimeUntil("Feb, 20, 2022, 01:20:00 "), 1000);
  }, [getTimeUntil]);

  return (
    <Slide left delay={1000}>
      <div className="countdown_wrapper">
        <div className="countdown_top">Event starts in</div>
        <div className="countdown_bottom">
          <CountdownItem time={time.days} tag={"days"} />
          <CountdownItem time={time.hours} tag={"hs"} />
          <CountdownItem time={time.minutes} tag={"min"} />
          <CountdownItem time={time.seconds} tag={"sec"} />
        </div>
      </div>
    </Slide>
  );
};

export default Timer;
