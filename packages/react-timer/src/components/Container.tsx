import { type ComponentPropsWithoutRef, type ElementType } from "react";

type Props<T extends ElementType> = {
  as?: T; // some valid id of a component in JSX ex: button
  children: React.ReactNode;
} & ComponentPropsWithoutRef<T>;

// polymorphic wrapper component
export default function Container<C extends ElementType>({ as, children, ...props }: Props<C>) {
  const Component = as || "div";
  return <Component {...props}>{children}</Component>;
}
