import { forwardRef } from "react";

export type InputProps = {
  label: string;
  id: string;
} & React.ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { id, label, ...props },
  ref
) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        ref={ref}
        type="text"
        {...props}
      />
    </div>
  );
});

export default Input;
