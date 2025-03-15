import { Link } from "react-router-dom";
import { Session } from "../types";
import Button from "./ui/Button";

type Props = {
  sessions: Session[];
};

export default function SessionsList({ sessions }: Props) {
  return (
    <div id="sessions-list">
      {sessions.map((session) => {
        return (
          <div
            className="session-item"
            key={session.id}
          >
            <img src={session.image}></img>
            <div className="session-data">
              <h3>{session.title}</h3>
              <p>{session.summary}</p>
              <div className="actions">
                <Link to={`/sessions/${session.id}`}>
                  <Button
                    value="Learn More"
                    variant="fill"
                    onClick={() => {}}
                  />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
