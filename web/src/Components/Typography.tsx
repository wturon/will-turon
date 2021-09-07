import { HTMLAttributes } from "react";
import styled from "styled-components";

type TypeographyTag = "p1" | "p2" | "p3" | "h1" | "h2" | "h3" | "h4" | "h5";
type TypeographyWeight = "lighter" | "normal" | "bold";
type TypographyColor = "primary" | "secondary";

type TypographyProps = {
  size: TypeographyTag;
  weight: TypeographyWeight;
  color?: TypographyColor;
} & HTMLAttributes<HTMLElement>;

export const MOBILE_REM_TYPOGRAPHY = {
  h1: 2,
  h2: 1.67,
  h3: 1.5,
  h4: 1.33,
  h5: 1.17,
  p1: 1.17,
  p2: 1,
  p3: 1,
};

export const DESKTOP_REM_TYPOGRAPHY = {
  h1: 4,
  h2: 3,
  h3: 2,
  h4: 1.67,
  h5: 1.5,
  p1: 1.33,
  p2: 1.17,
  p3: 1,
};

export const Typography = ({
  size,
  weight,
  children,
  color = "primary",
  className,
}: TypographyProps) => {
  const convertedSize = DESKTOP_REM_TYPOGRAPHY[size];
  return (
    <StyledTypography
      className={className}
      color={color}
      weight={weight}
      size={convertedSize}
    >
      {children}
    </StyledTypography>
  );
};

type StyledTypographyProps = {
  size: number;
  weight: TypeographyWeight;
  color: TypographyColor;
};

const StyledTypography = styled.div.attrs(
  ({ size, weight, color }: StyledTypographyProps) => ({
    size,
    weight,
    color,
  })
)`
  font-size: ${(props) => props.size + "rem"};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.theme.text[props.color]};
`;
