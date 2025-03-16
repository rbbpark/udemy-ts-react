import { renderWithProviders } from "../../utils/test-utils";
import CartModal from "../CartModal";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { type Session } from "../../types";

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

const initialState = {
  cart: {
    items: [mockSession],
  },
};

describe("CartModal", () => {
  let modalRoot: HTMLElement;

  beforeEach(() => {
    // Create a div with id "modal-root" for the portal
    modalRoot = document.createElement("div");
    modalRoot.setAttribute("id", "modal-root");
    document.body.appendChild(modalRoot);

    // Mock the HTMLDialogElement methods
    HTMLDialogElement.prototype.showModal = vi.fn();
    HTMLDialogElement.prototype.close = vi.fn();
  });

  afterEach(() => {
    document.body.removeChild(modalRoot);
    vi.restoreAllMocks();
  });

  it("should display cart item with correct session details", () => {
    const { store } = renderWithProviders(<CartModal onClose={vi.fn()} />, {
      preloadedState: initialState,
    });

    expect(screen.getByText(mockSession.title)).toBeInTheDocument();
    expect(screen.getAllByTestId("upcoming-session")).toHaveLength(1);
    expect(store.getState().cart.items).toEqual([mockSession]);
  });

  it("should remove session and update UI when Cancel is clicked", async () => {
    const user = userEvent.setup();
    const { store } = renderWithProviders(<CartModal onClose={vi.fn()} />, {
      preloadedState: initialState,
    });

    const initialItemCount = store.getState().cart.items.length;
    expect(initialItemCount).toBe(1);

    await user.click(screen.getByText("Cancel"));

    expect(screen.getByText("No upcoming sessions. Start booking now!")).toBeInTheDocument();
    expect(screen.queryByText(mockSession.title)).not.toBeInTheDocument();
    expect(store.getState().cart.items).toHaveLength(0);
  });

  it("calls onClose when the close button is clicked", async () => {
    const onClose = vi.fn();
    const user = userEvent.setup();
    renderWithProviders(<CartModal onClose={onClose} />);
    await user.click(screen.getByText("Close"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
