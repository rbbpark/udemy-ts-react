import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "./Button";
import "@testing-library/jest-dom/vitest";

describe("Button", () => {
  it("renders with correct text", () => {
    render(
      <Button
        value="Click me"
        variant="fill"
      />
    );
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
  });
});
