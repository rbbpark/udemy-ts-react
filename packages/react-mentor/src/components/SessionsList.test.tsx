import SessionsList from "./SessionsList";
import { type Session } from "../types";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const mockSessions: Session[] = [
  {
    id: "sess01",
    title: "Kickstart with React: Personal Intro",
    summary: "Tailored guidance for total beginners in React.",
    description:
      "Starting with React can be daunting.\n\nYet, with the right guidance, it can be an exhilarating journey.\n\nIn this session, we will begin by demystifying React's core philosophy.\n\nWhy was React created?\n\nWhat problems does it solve in the world of web development?\n\nTogether, we'll delve into the virtual DOM, JSX, and component-based architecture.\n\nNo need to worry about the jargon; I'll break everything down step by step.\n\nWe'll touch on the importance of unidirectional data flow and the component lifecycle.\n\nWe'll set up a new React project together.\n\nBy the end of our session, you will have a clear understanding and a roadmap tailored just for you, to aid your React journey.",
    duration: 1,
    date: "2023-11-01",
    image: "imageData",
  },
  {
    id: "sess02",
    title: "Debugging Your React Code",
    summary: "Stuck with a React bug? Let's squash it together.",
    description:
      "Every developer, regardless of experience, encounters bugs.\n\nBut, the power lies in knowing how to squash them effectively.\n\nIn our focused session, you'll learn the art of debugging in React.\n\nWe'll start by understanding the common pitfalls and errors that many developers face.\n\nUsing tools like React DevTools, we'll inspect components, props, and state.\n\nTogether, we'll simulate a few bugs and then debug them in real-time.\n\nYou'll learn about error boundaries and their significance in preventing app crashes.\n\nBy the end, not only will we have tackled your current bug(s), but you'll also be equipped with a toolkit of debugging strategies for future challenges.\n\nRemember, in the world of development, debugging is a superpower.",
    duration: 1.5,
    date: "2023-11-03",
    image: "imageData",
  },
];

describe("SessionsList", () => {
  it("should display a list of sessions", () => {
    render(<SessionsList sessions={mockSessions} />, { wrapper: BrowserRouter });
    expect(screen.getByText(mockSessions[0].title)).toBeInTheDocument();
    expect(screen.getByText(mockSessions[1].title)).toBeInTheDocument();
  });
});
