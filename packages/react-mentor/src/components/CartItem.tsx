import Button from "./ui/Button";
import { useAppDispatch } from "../store/hooks";
import { removeFromCart } from "../store/cartSlice";

type Props = {
  id: string;
  title: string;
  summary: string;
  date: string;
};

export default function CartItem({ id, title, summary, date }: Props) {
  const dispatch = useAppDispatch();
  function handleDelete() {
    dispatch(removeFromCart(id));
  }

  return (
    <div className="upcoming-session">
      <div>
        <h3>{title}</h3>
        <p>{summary}</p>
        <time dateTime={new Date(date).toISOString()}>
          {new Date(date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </time>
      </div>
      <div className="actions">
        <Button
          value="Cancel"
          variant="text-only"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
}
