import React from "react";

type ButtonProps = React.ComponentPropsWithoutRef<"button">;
type AnchorProps = React.ComponentPropsWithoutRef<"a">;

// props is AnchorProps: Type predicate
// if boolean return value is true, props is of type AnchorProps
function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return "href" in props;
}

export function Button(props: ButtonProps | AnchorProps) {
  if (isAnchorProps(props)) {
    return <a {...props}></a>;
  }
  return <button {...props}></button>;
}
