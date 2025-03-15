import { ReactNode } from "react";
import SessionsList from "../components/SessionsList.tsx";
import { useGetSessionsQuery } from "../services/sessionsApi.ts";

export default function SessionsPage() {
  const { data, error, isLoading } = useGetSessionsQuery();

  let content: ReactNode;

  if (error) {
    content = <h2>{`Error occurred: ${error}`}</h2>;
  }

  if (isLoading) {
    content = <h2>Loading...</h2>;
  }

  if (data) {
    content = <SessionsList sessions={data} />;
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
