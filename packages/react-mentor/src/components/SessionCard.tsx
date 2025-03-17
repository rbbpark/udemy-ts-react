import { Link } from "react-router-dom";
import Button from "./ui/Button";

type Props = {
  title: string;
  image: string;
  summary: string;
  sessionId: string;
};

export default function SessionCard({ title, image, summary, sessionId }: Props) {
  return (
    <div className="session-item">
      <img src={image}></img>
      <div className="session-data">
        <h3>{title}</h3>
        <p>{summary}</p>
        <div className="actions">
          <Link to={`/sessions/${sessionId}`}>
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
}
