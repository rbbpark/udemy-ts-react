import { Link } from "react-router-dom";
import Button from "./ui/Button";
import { useState } from "react";
import CartModal from "./CartModal";

type Props = {};

export default function Header({}: Props) {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  function handleOpenModal() {
    setIsCartModalOpen(true);
  }

  function handleCloseModal() {
    setIsCartModalOpen(false);
  }

  return (
    <>
      {isCartModalOpen && <CartModal onClose={handleCloseModal} />}
      <div id="main-header">
        <h1>React Mentoring</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Our Mission</Link>
            </li>
            <li>
              <Link to="sessions">Browse Sessions</Link>
            </li>
            <li>
              <Button
                onClick={handleOpenModal}
                value="Upcoming Sessions"
                variant="fill"
              />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
