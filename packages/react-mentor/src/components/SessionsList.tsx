import { type Session } from "../types";
import SessionCard from "./SessionCard";

type Props = {
  sessions: Session[];
};

export default function SessionsList({ sessions }: Props) {
  return (
    <div id="sessions-list">
      {sessions.map((session) => (
        <SessionCard
          title={session.title}
          image={session.image}
          summary={session.summary}
          sessionId={session.id}
        />
      ))}
    </div>
  );
}
