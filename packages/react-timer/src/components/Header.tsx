import { MouseEvent } from "react";
import Button from "./UI/Button.tsx";
import { useTimersContext } from "../store/timers-context.tsx";

export default function Header() {
  const { isRunning } = useTimersContext();
  const { stopTimers, startTimers } = useTimersContext();

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    isRunning ? stopTimers() : startTimers();
  }

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button onClick={handleClick}>{isRunning ? "Stop Timers" : "Start Timers"}</Button>
    </header>
  );
}
