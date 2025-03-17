import App from "./App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("App", () => {
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

  it("should handle navigation", async () => {
    render(<App />);
    const user = userEvent.setup();

    expect(screen.getByText("Our Mission: Your Success")).toBeInTheDocument();
    await user.click(screen.getByText("Browse Sessions"));
    expect(screen.getByText("Available mentoring sessions")).toBeInTheDocument();
  });

  it("should open upcoming sessions modal on header nav button click", async () => {
    render(<App />);
    const user = userEvent.setup();
    await user.click(screen.getByText("Upcoming Sessions"));
    expect(screen.getByText("No upcoming sessions. Start booking now!")).toBeInTheDocument();
  });
});
