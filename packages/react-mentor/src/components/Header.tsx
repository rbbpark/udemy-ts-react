import { Link } from "react-router-dom";
import Button from "./ui/Button";

type Props = {};

export default function Header({}: Props) {
  return (
    <div id="main-header">
      <h1>React Mentoring</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Our Mission</Link>
          </li>
          <li>
            <Link to="sessions">Browse Sessions</Link>
          </li>
          <li>
            <Button
              value="Upcoming Sessions"
              variant="fill"
            />
          </li>
        </ul>
      </nav>
    </div>
  );
}
