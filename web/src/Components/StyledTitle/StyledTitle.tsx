import React from "react";
import "./StyledTitle.css";

type StyledTitleProps = {
  primaryText: String;
  emphasizedPrimaryText: String;
  secondaryText: String;
} & React.HTMLAttributes<HTMLElement>;
export const StyledTitle = ({
  primaryText,
  emphasizedPrimaryText,
  secondaryText,
  children,
}: StyledTitleProps): JSX.Element => {
  return (
    <div className="flex-row">
      <div className="vertical-line" />
      <div className="title-group">
        <h1>
          {primaryText}{" "}
          <span className="gradient-text">{emphasizedPrimaryText}</span>
        </h1>
        <p>{secondaryText}</p>
        {children}
      </div>
    </div>
  );
};
