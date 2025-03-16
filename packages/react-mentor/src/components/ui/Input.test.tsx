import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input", () => {
  it("renders with label and input", () => {
    render(
      <Input
        label="Username"
        id="username"
      />
    );

    const labelElement = screen.getByText("Username");
    const inputElement = screen.getByLabelText("Username");

    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });

  it("forwards additional props to the input element", () => {
    render(
      <Input
        label="Password"
        id="password"
        type="password"
        placeholder="Enter password"
        required
      />
    );

    const inputElement = screen.getByLabelText("Password");

    expect(inputElement).toHaveAttribute("type", "password");
    expect(inputElement).toHaveAttribute("placeholder", "Enter password");
    expect(inputElement).toHaveAttribute("required");
  });
});
