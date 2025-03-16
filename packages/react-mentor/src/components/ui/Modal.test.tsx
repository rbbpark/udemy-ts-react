import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal, { ModalHandle } from "./Modal";
import { useEffect, useRef } from "react";

// Mock createPortal to make testing easier
vi.mock("react-dom", () => ({
  createPortal: (children: React.ReactNode) => children,
}));

// Helper component to test the Modal with useRef
const TestComponent = ({ onClose }: { onClose: () => void }) => {
  const modalRef = useRef<ModalHandle>(null);

  useEffect(() => {
    modalRef.current?.open();
  }, []);

  return (
    <Modal
      ref={modalRef}
      onClose={onClose}
    >
      <div>Modal Content</div>
      <button>Close</button>
    </Modal>
  );
};

// Helper component to test the Modal with useRef
const TestComponentWithTrigger = ({ onClose }: { onClose: () => void }) => {
  const modalRef = useRef<ModalHandle>(null);

  const openModal = () => {
    modalRef.current?.open();
  };

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        ref={modalRef}
        onClose={onClose}
      >
        <div>Modal Content</div>
        <button>Close</button>
      </Modal>
    </>
  );
};

describe("Modal", () => {
  beforeEach(() => {
    // Create a div with id "modal-root" for the portal
    const modalRoot = document.createElement("div");
    modalRoot.setAttribute("id", "modal-root");
    document.body.appendChild(modalRoot);

    // Mock the HTMLDialogElement methods
    HTMLDialogElement.prototype.showModal = vi.fn(function (this: HTMLDialogElement) {
      // This makes the dialog "open" in the DOM
      this.open = true;
    });
    HTMLDialogElement.prototype.close = vi.fn(function (this: HTMLDialogElement) {
      // This makes the dialog "closed" in the DOM
      this.open = false;
    });
  });

  afterEach(() => {
    // Clean up the modal root
    document.body.innerHTML = "";
    vi.clearAllMocks();
  });

  it("renders children correctly", () => {
    render(<TestComponent onClose={() => {}} />);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Modal Content")).toBeInTheDocument();
  });

  it("should show when dialog's open event is triggered", async () => {
    render(<TestComponentWithTrigger onClose={() => {}} />);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalledTimes(0);

    // Click the button to open the modal
    await userEvent.click(screen.getByText("Open Modal"));

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when dialog's onClose event is triggered", () => {
    const onClose = vi.fn();
    render(<TestComponent onClose={onClose} />);

    // Get the dialog element and trigger the close event
    const dialog = screen.getByRole("dialog");
    dialog.dispatchEvent(new Event("close"));

    // Check if onClose was called
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
