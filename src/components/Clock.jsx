import { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        })
      );
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return <p className="clock">{time}</p>;
}

export default Clock;
