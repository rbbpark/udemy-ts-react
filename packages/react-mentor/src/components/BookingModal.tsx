import Modal, { ModalHandle } from "./ui/Modal.tsx";
import { FormEvent, useEffect, useRef } from "react";
import { Session } from "../types/index.ts";
import Input from "./ui/Input.tsx";
import Button from "./ui/Button.tsx";

type Props = {
  // session: Session;
  onClose: () => void;
};

export default function BookingModal({ onClose }: Props) {
  const modal = useRef<ModalHandle>(null);

  // useEffect is used to open the Modal via its exposed `open` method when the component is mounted
  useEffect(() => {
    if (modal.current) {
      modal.current.open();
    }
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data); // would normally be sent to a server, together with session data
    // sessionsCtx.bookSession(session);
    onClose();
  }

  return (
    <Modal
      ref={modal}
      onClose={onClose}
    >
      <h2>Book Session</h2>
      <form onSubmit={handleSubmit}>
        <Input
          label="Your name"
          id="name"
          name="name"
          type="text"
          required
        />
        <Input
          label="Your email"
          id="email"
          name="email"
          type="email"
          required
        />
        <p className="actions">
          <Button
            onClick={onClose}
            value="Cancel"
            style="text-only"
          />
          <Button
            value="Book Session"
            style="fill"
          />{" "}
        </p>
      </form>
    </Modal>
  );
}
