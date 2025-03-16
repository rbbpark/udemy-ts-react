import { screen } from "@testing-library/react";
import { renderWithProviders } from "../utils/test-utils";
import CartItem from "./CartItem";
import userEvent from "@testing-library/user-event";
import { removeFromCart } from "../store/cartSlice";
import { vi } from "vitest";

const initialState = {
  cart: {
    items: [
      {
        id: "sess01",
        title: "Kickstart with React: Personal Intro",
        summary: "Tailored guidance for total beginners in React.",
        description:
          "Starting with React can be daunting.\n\nYet, with the right guidance, it can be an exhilarating journey.\n\nIn this session, we will begin by demystifying React's core philosophy.\n\nWhy was React created?\n\nWhat problems does it solve in the world of web development?\n\nTogether, we'll delve into the virtual DOM, JSX, and component-based architecture.\n\nNo need to worry about the jargon; I'll break everything down step by step.\n\nWe'll touch on the importance of unidirectional data flow and the component lifecycle.\n\nWe'll set up a new React project together.\n\nBy the end of our session, you will have a clear understanding and a roadmap tailored just for you, to aid your React journey.",
        duration: 1,
        date: "2023-11-01T12:00:00",
        image: "image",
      },
    ],
  },
};

const props = {
  id: "sess01",
  title: "Kickstart with React: Personal Intro",
  summary: "Tailored guidance for total beginners in React.",
  date: "2023-11-01T12:00:00",
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

  // it("should remove cart item when the delete button is pressed", async () => {
  //   renderWithProviders(<CartItem {...props} />, {
  //     preloadedState: initialState,
  //   });
  //   screen.debug();
  //   await userEvent.click(screen.getByRole("button"));
  // });

  // it("should dispatch remove action when delete button is clicked", async () => {
  //   const { store } = renderWithProviders(<CartItem {...props} />);
  //   console.log(store);

  //   const spy = vi.spyOn(store, "dispatch");
  //   await userEvent.click(screen.getByText("Cancel"));
  //   console.log(spy.mock.calls);

  //   expect(spy).toHaveBeenCalled();
  // });

  // it("should remove cart item when the delete button is pressed", async () => {
  //   const user = userEvent.setup();
  //   const { store } = renderWithProviders(<CartItem {...props} />, {
  //     preloadedState: initialState,
  //   });
  //   const items = store.getState().cart.items;

  //   expect(items.length).toBe(1);

  //   // Verify button is present and enabled
  //   const button = screen.getByText("Cancel");
  //   expect(button).toBeEnabled();

  //   await user.click(button);

  //   expect(items.length).toBe(0);
  //   expect(items).not.toContain(props.id);
  // });
});
