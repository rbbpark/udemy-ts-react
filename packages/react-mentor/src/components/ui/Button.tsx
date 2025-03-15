import React from "react";

type Props = {
  onClick?: () => void;
  value: string;
  style: "fill" | "text-only";
};

export default function Button({ onClick, style, value }: Props) {
  return (
    <button
      onClick={onClick}
      className={`button ${style === "text-only" && "button--text-only"}`}
    >
      {value}
    </button>
  );
}
