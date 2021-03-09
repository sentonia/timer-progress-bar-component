import React from "react";
import Timer from "./Timer";
import AccessAlarm from "@material-ui/icons/AccessAlarm";

export default function App() {
  return (
    <Timer
      hasIcon
      timerIcon={<AccessAlarm />}
      initialTime={15000}
      timeLeft={13000}
      tickFrequency={1000}
    />
  );
}
