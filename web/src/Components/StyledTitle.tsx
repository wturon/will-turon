import React from "react";
import styled from "styled-components";
import { Typography } from "./Typography";

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
    <StyledContainer>
      <VerticalLine />
      <TitleGroup>
        <Typography size={"h1"} weight={"bold"}>
          {primaryText} <GradientText>{emphasizedPrimaryText}</GradientText>
        </Typography>
        <Typography color={"secondary"} size={"p1"} weight={"normal"}>
          {secondaryText}
        </Typography>
        <StyledChildren>{children}</StyledChildren>
      </TitleGroup>
    </StyledContainer>
  );
};

const StyledChildren = styled.div`
  margin-top: 1rem;
`;

const StyledContainer = styled.div`
  display: flex;
`;

const VerticalLine = styled.div`
  height: auto;
  margin-top: 18px;
  width: 3px;
  background-image: linear-gradient(
    45deg,
    ${(props) => props.theme.gradient.primary},
    ${(props) => props.theme.gradient.secondary}
  );
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  max-width: 500px;
  color: ${(props) => props.theme.text.primary};
`;

const GradientText = styled.span`
  background-image: linear-gradient(
    45deg,
    ${(props) => props.theme.gradient.primary},
    ${(props) => props.theme.gradient.secondary}
  );
  background-size: 100%;
  background-repeat: repeat;

  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;
