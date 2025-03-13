/* 
  A reusable IconButton component which will output text side-by-side next to a configurable icon (or actually any component). 
  It accepts an icon prop which wants a component identifier as a value.

  It may be used like this:

  function HeartIcon() {
    return <span>❤️</span>;
  }

  <IconButton icon={HeartIcon} onClick={() => console.log('Button clicked!')}>
    Like
  </IconButton>
*/

import React from "react";

type Props = {
  icon: React.ElementType;
  onClick: () => void;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<"button">;

export function IconButton({ icon: Icon, children, ...props }: Props) {
  return (
    <button {...props}>
      <span>
        <Icon />
      </span>
      <span>{children}</span>
    </button>
  );
}
