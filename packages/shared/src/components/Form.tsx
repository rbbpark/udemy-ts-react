import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { type FormHandle } from "../types";

type Props = {
  children: React.ReactNode;
  onSave: (value: unknown) => void;
} & React.ComponentPropsWithoutRef<"form">;

const Form = forwardRef<FormHandle, Props>(function Form({ onSave, children, ...props }, ref) {
  const form = useRef<HTMLFormElement>(null);

  useImperativeHandle(ref, () => {
    return {
      clear() {
        console.log("clear");
        form.current?.reset();
      },
    };
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
  }

  return (
    <form
      onSubmit={handleSubmit}
      ref={form}
      {...props}
    >
      {children}
    </form>
  );
});
export { Form };
