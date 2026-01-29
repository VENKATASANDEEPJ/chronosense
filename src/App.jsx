import { useState, useEffect } from "react";
import { getTimePhase } from "./logic/getTimePhase";

import Header from "./components/Header";
import VisualPanel from "./components/VisualPanel";
import Clock from "./components/Clock";

function App() {
  const [timePhase, setTimePhase] = useState(getTimePhase());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimePhase(getTimePhase());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={timePhase}>
      <VisualPanel>
        <Header timePhase={timePhase} />
        <Clock />
      </VisualPanel>
    </div>
  );
}

export default App;
