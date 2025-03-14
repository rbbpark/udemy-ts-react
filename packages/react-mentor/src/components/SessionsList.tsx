import { Link } from "react-router-dom";
import { Session } from "../../types";

type Props = {
  sessions: Session[];
};

export default function SessionsList({ sessions }: Props) {
  return (
    <div id="sessions-list">
      {sessions.map((session) => {
        return (
          <div className="session-item">
            <img src={session.image}></img>
            <div className="session-data">
              <h3>{session.title}</h3>
              <p>{session.summary}</p>
              <div className="actions">
                <Link to={`/sessions/${session.id}`}>
                  <button className="button">Learn More</button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
