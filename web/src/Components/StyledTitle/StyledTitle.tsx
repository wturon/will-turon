import React from "react";
import styled from "styled-components";

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
        <h1>
          {primaryText} <GradientText>{emphasizedPrimaryText}</GradientText>
        </h1>
        <p>{secondaryText}</p>
        {children}
      </TitleGroup>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
`;

const VerticalLine = styled.div`
  height: auto;
  margin-top: 18px;
  width: 3px;
  background-image: linear-gradient(
    ${(props) => props.theme.gradient.primary},
    ${(props) => props.theme.gradient.secondary}
  );
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  max-width: 500px;
`;

const GradientText = styled.span`
  background-image: linear-gradient(
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
