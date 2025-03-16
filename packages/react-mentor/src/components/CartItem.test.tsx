import { screen } from "@testing-library/react";
import { renderWithProviders } from "../utils/test-utils";
import CartItem from "./CartItem";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { type Session } from "../types";
import { setupStore } from "../store/store";

const mockSession: Session = {
  id: "sess01",
  title: "Kickstart with React: Personal Intro",
  summary: "Tailored guidance for total beginners in React.",
  description:
    "Starting with React can be daunting.\n\nYet, with the right guidance, it can be an exhilarating journey.\n\nIn this session, we will begin by demystifying React's core philosophy.\n\nWhy was React created?\n\nWhat problems does it solve in the world of web development?\n\nTogether, we'll delve into the virtual DOM, JSX, and component-based architecture.\n\nNo need to worry about the jargon; I'll break everything down step by step.\n\nWe'll touch on the importance of unidirectional data flow and the component lifecycle.\n\nWe'll set up a new React project together.\n\nBy the end of our session, you will have a clear understanding and a roadmap tailored just for you, to aid your React journey.",
  duration: 1,
  date: "2023-11-01T12:00:00", // timezone formatting bug
  image: "imageData",
};

const props = {
  id: mockSession.id,
  title: mockSession.title,
  summary: mockSession.summary,
  date: mockSession.date,
};

describe("CartItem", () => {
  it("should render a cart item", () => {
    renderWithProviders(<CartItem {...props} />);

    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.summary)).toBeInTheDocument();
  });

  it("should format date", () => {
    renderWithProviders(<CartItem {...props} />);
    expect(screen.getByText("Nov 1, 2023")).toBeInTheDocument();
  });

  it("should dispatch remove action when delete button is clicked", async () => {
    const store = setupStore();
    const spy = vi.spyOn(store, "dispatch");

    renderWithProviders(<CartItem {...props} />, { store });

    await userEvent.click(screen.getByText("Cancel"));

    expect(spy).toHaveBeenCalledWith({
      type: "cart/removeFromCart",
      payload: props.id,
    });
  });
});
