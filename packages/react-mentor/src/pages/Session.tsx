import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetSessionsQuery } from "../services/sessionsApi";
import BookingModal from "../components/BookingModal";
import Button from "../components/ui/Button";

export default function SessionPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  function handleOpenModal() {
    setIsBookingModalOpen(true);
  }

  function handleCloseModal() {
    setIsBookingModalOpen(false);
  }

  // Get id path param from React Router
  const params = useParams<{ id: string }>();
  const sessionId = params.id;
  const { session } = useGetSessionsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      session: data?.find((session) => session.id === sessionId),
    }),
  });

  if (!session) {
    return (
      <main id="session-page">
        <p>No session found!</p>
      </main>
    );
  }

  return (
    <>
      {isBookingModalOpen && (
        <BookingModal
          session={session}
          onClose={handleCloseModal}
        />
      )}
      <main id="session-page">
        <article>
          <header>
            <img
              src={session.image}
              alt={session.title}
            />
            <div>
              <h2>{session.title}</h2>
              <time dateTime={new Date(session.date).toISOString()}>
                {new Date(session.date).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </time>
              <p>
                <Button
                  onClick={handleOpenModal}
                  variant="fill"
                  value="Book Session"
                />
              </p>
            </div>
          </header>
          <p id="content">{session.description}</p>
        </article>
      </main>
    </>
  );
}
