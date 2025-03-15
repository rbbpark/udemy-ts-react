import { ComponentPropsWithoutRef } from "react";

type Props = {
  value: string;
  variant: "fill" | "text-only";
} & ComponentPropsWithoutRef<"button">;

export default function Button({ onClick, variant, value, ...props }: Props) {
  return (
    <button
      onClick={onClick}
      className={`button ${variant === "text-only" && "button--text-only"}`}
      {...props}
    >
      {value}
    </button>
  );
}
