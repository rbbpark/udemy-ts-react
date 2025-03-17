import { setupStore } from "../store/store";
import { Session } from "../types";
import { renderWithProviders } from "../utils/test-utils";
import BookingModal from "./BookingModal";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const mockSession: Session = {
  id: "sess01",
  title: "Kickstart with React: Personal Intro",
  summary: "Tailored guidance for total beginners in React.",
  description:
    "Starting with React can be daunting.\n\nYet, with the right guidance, it can be an exhilarating journey.\n\nIn this session, we will begin by demystifying React's core philosophy.\n\nWhy was React created?\n\nWhat problems does it solve in the world of web development?\n\nTogether, we'll delve into the virtual DOM, JSX, and component-based architecture.\n\nNo need to worry about the jargon; I'll break everything down step by step.\n\nWe'll touch on the importance of unidirectional data flow and the component lifecycle.\n\nWe'll set up a new React project together.\n\nBy the end of our session, you will have a clear understanding and a roadmap tailored just for you, to aid your React journey.",
  duration: 1,
  date: "2023-11-01T12:00:00",
  image: "image",
};

describe("BookingModal", () => {
  let modalRoot: HTMLElement;

  beforeEach(() => {
    // Create a div with id "modal-root" for the portal
    modalRoot = document.createElement("div");
    modalRoot.setAttribute("id", "modal-root");
    document.body.appendChild(modalRoot);

    // Mock the HTMLDialogElement methods
    HTMLDialogElement.prototype.showModal = vi.fn(function (this: HTMLDialogElement) {
      // This makes the dialog "open" in the DOM
      this.open = true;
    });
    HTMLDialogElement.prototype.close = vi.fn();
  });

  afterEach(() => {
    document.body.removeChild(modalRoot);
    vi.restoreAllMocks();
  });

  it("should book a new session", async () => {
    const store = setupStore();
    const spy = vi.spyOn(store, "dispatch");
    const onClose = vi.fn();
    renderWithProviders(
      <BookingModal
        session={mockSession}
        onClose={onClose}
      />,
      {
        store,
      }
    );
    expect(store.getState().cart.items.length).toEqual(0);

    // input a valid booking and press submit
    const nameInput = screen.getByLabelText("Your name");
    await userEvent.type(nameInput, "Bob");
    const emailInput = screen.getByLabelText("Your email");
    await userEvent.type(emailInput, "email@email");
    const submitButton = screen.getByRole("button", {
      name: "Book Session",
    });
    await userEvent.click(submitButton);

    // it should dispatch addToCart action once
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith({
      type: "cart/addToCart",
      payload: mockSession,
    });
    // it should update the redux store state
    expect(store.getState().cart.items).toEqual([mockSession]);
    // it should call onClose after successful form submission
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should prevent form submission with invalid data", async () => {
    const onClose = vi.fn();
    renderWithProviders(
      <BookingModal
        session={mockSession}
        onClose={onClose}
      />
    );

    const emailInput = screen.getByLabelText("Your email");
    await userEvent.type(emailInput, "invalid-email");
    const submitButton = screen.getByRole("button", {
      name: "Book Session",
    });
    await userEvent.click(submitButton);

    expect(onClose).not.toHaveBeenCalled();
  });

  it("should call onClose when cancel button is clicked", async () => {
    const onClose = vi.fn();
    const user = userEvent.setup();
    renderWithProviders(
      <BookingModal
        session={mockSession}
        onClose={onClose}
      />
    );
    await user.click(screen.getByText("Cancel"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
