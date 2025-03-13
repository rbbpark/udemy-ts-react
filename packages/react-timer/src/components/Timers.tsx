import { useTimersContext } from "../store/timers-context";
import Timer from "./Timer.tsx";

export default function Timers() {
  const { timers } = useTimersContext();
  let timerId = 1;
  return (
    <ul>
      {timers.map((timer) => (
        <li key={timerId++}>
          <Timer {...timer} />
        </li>
      ))}
    </ul>
  );
}
