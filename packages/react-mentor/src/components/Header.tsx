import { Link } from "react-router-dom";

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
            <button className="button">Upcoming Sessions</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
