import Modal, { ModalHandle } from "./ui/Modal.tsx";
import { useEffect, useRef } from "react";
import { useAppSelector } from "../store/hooks.ts";
import CartItem from "./CartItem.tsx";
import Button from "./ui/Button.tsx";

type Props = {
  onClose: () => void;
};

export default function CartModal({ onClose }: Props) {
  const modal = useRef<ModalHandle>(null);
  const sessions = useAppSelector((state) => state.cart.items);

  // useEffect is used to open the Modal via its exposed `open` method when the component is mounted
  useEffect(() => {
    if (modal.current) {
      modal.current.open();
    }
  }, []);

  let content;
  if (sessions.length === 0) {
    content = <p>No upcoming sessions. Start booking now!</p>;
  } else {
    content = sessions.map((session) => (
      <CartItem
        key={session.id}
        {...session}
      />
    ));
  }

  return (
    <Modal
      ref={modal}
      onClose={onClose}
    >
      <h2>Upcoming Sessions</h2>
      {content}
      <div className="actions">
        <Button
          value="Close"
          variant="fill"
          onClick={onClose}
        />
      </div>
    </Modal>
  );
}
