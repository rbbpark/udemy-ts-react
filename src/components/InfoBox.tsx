import React from "react";

type BaseInfoBoxProps = {
  children: React.ReactNode;
};

type HintInfoBoxProps = BaseInfoBoxProps & {
  mode: "hint";
};

type WarningInfoBoxProps = BaseInfoBoxProps & {
  mode: "warning";
  severity: "low" | "medium" | "high";
};

type Props = HintInfoBoxProps | WarningInfoBoxProps;

export default function InfoBox(props: Props) {
  if (props.mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{props.children}</p>
      </aside>
    );
  }

  return (
    <aside className={`infobox infobox-warning warning--${props.severity}`}>
      <h2>Warning</h2>
      <p>{props.children}</p>
    </aside>
  );
}
