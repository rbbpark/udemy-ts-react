import Modal, { ModalHandle } from "./ui/Modal.tsx";
import { FormEvent, useEffect, useRef } from "react";
import { Session } from "../types/index.ts";
import Input from "./ui/Input.tsx";
import Button from "./ui/Button.tsx";
import { addToCart } from "../store/cartSlice.ts";
import { useCartDispatch } from "../store/hooks.ts";

type Props = {
  session: Session;
  onClose: () => void;
};

export default function BookingModal({ session, onClose }: Props) {
  const modal = useRef<ModalHandle>(null);
  const dispatch = useCartDispatch();

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
    dispatch(addToCart(session));
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
            variant="text-only"
          />
          <Button
            value="Book Session"
            variant="fill"
          />{" "}
        </p>
      </form>
    </Modal>
  );
}
