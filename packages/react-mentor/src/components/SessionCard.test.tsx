import SessionCard from "./SessionCard";
import { type Session } from "../types";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const mockSession: Session = {
  id: "sess01",
  title: "Kickstart with React: Personal Intro",
  summary: "Tailored guidance for total beginners in React.",
  description:
    "Starting with React can be daunting.\n\nYet, with the right guidance, it can be an exhilarating journey.\n\nIn this session, we will begin by demystifying React's core philosophy.\n\nWhy was React created?\n\nWhat problems does it solve in the world of web development?\n\nTogether, we'll delve into the virtual DOM, JSX, and component-based architecture.\n\nNo need to worry about the jargon; I'll break everything down step by step.\n\nWe'll touch on the importance of unidirectional data flow and the component lifecycle.\n\nWe'll set up a new React project together.\n\nBy the end of our session, you will have a clear understanding and a roadmap tailored just for you, to aid your React journey.",
  duration: 1,
  date: "2023-11-01",
  image: "imageData",
};

const props = {
  sessionId: mockSession.id,
  title: mockSession.title,
  image: mockSession.image,
  summary: mockSession.summary,
};

describe("SessionCard", () => {
  it("should render a session card", () => {
    render(<SessionCard {...props} />, { wrapper: BrowserRouter });

    expect(screen.getByText(mockSession.title)).toBeInTheDocument();
    expect(screen.getByText(mockSession.summary)).toBeInTheDocument();
  });

  it("should render a link with the correct URL", () => {
    render(<SessionCard {...props} />, { wrapper: BrowserRouter });
    expect(screen.getByRole("link")).toHaveAttribute("href", `/sessions/${mockSession.id}`);
  });
});
