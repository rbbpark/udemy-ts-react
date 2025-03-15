import { render, screen } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

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

  it("applies correct class based on variant", () => {
    const { rerender } = render(
      <Button
        value="Click me"
        variant="fill"
      />
    );
    expect(screen.getByRole("button")).toHaveClass("button");

    rerender(
      <Button
        value="Test"
        variant="text-only"
      />
    );
    expect(screen.getByRole("button")).toHaveClass("button--text-only");
  });

  it("calls onClick when clicked", async () => {
    const onClick = vi.fn();
    render(
      <Button
        value="Click"
        variant="fill"
        onClick={onClick}
      />
    );
    await userEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("passes additional props correctly", () => {
    render(
      <Button
        value="Disabled"
        variant="fill"
        disabled
      />
    );
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
