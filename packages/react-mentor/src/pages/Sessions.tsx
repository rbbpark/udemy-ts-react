import { ReactNode, useEffect, useState } from "react";
import { fetchSessions } from "../utils/https.ts";
import { Session } from "../types.ts";
import SessionsList from "../components/SessionsList.tsx";

export default function SessionsPage() {
  const [sessions, setSessions] = useState<Session[]>();
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string>();

  async function fetchData() {
    setIsFetching(true);
    await fetchSessions()
      .then((data) => {
        setSessions(data);
      })
      .catch((error) => {
        if (error instanceof Error) {
          setError(error.message);
        }
      });
    setIsFetching(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  let content: ReactNode;

  if (error) {
    content = <p>{`Error occurred: ${error}`}</p>;
  }

  if (isFetching) {
    content = <p>Fetching sessions...</p>;
  }

  if (sessions) {
    content = <SessionsList sessions={sessions} />;
  }

  return (
    <main id="sessions-page">
      <header>
        <h2>Available mentoring sessions</h2>
        <p>
          From an one-on-one introduction to React's basics all the way up to a deep dive into state
          mechanics - we got just the right session for you!
        </p>
      </header>
      {content}
    </main>
  );
}
