import styled from "styled-components";
import { HTMLAttributes, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Typography } from "./Typography";
import { addOpacityToColor } from "../Theme/theme";

export const Navbar = () => (
  <NavbarContainer>
    <NavBarOptionContainer>
      <NavOption route={"/"}>Home</NavOption>
      <NavOption route={"/gallery"}>Gallery</NavOption>
    </NavBarOptionContainer>
    <AdminNavBarOptions>
      <NavOption route={"/signin"}>Sign in</NavOption>
    </AdminNavBarOptions>
  </NavbarContainer>
);

const AdminNavBarOptions = styled.div`
  display: flex;
  margin-right: 2%;
`;

const NavBarOptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 2%;
  min-width: 12rem;
`;

const NavbarContainer = styled.div`
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background-color: ${(props) =>
    addOpacityToColor(props.theme.card.darkGrey, 0.9)};
  backdrop-filter: blur(2px);
`;

type NavOptionProps = {
  route: string;
} & HTMLAttributes<HTMLDivElement>;

const NavOption = ({ children, route }: NavOptionProps) => {
  const history = useHistory();
  const id = useLocation();
  console.log(id);
  return (
    <StyledNavOption onClick={() => history.push(route)}>
      {id.pathname === route ? (
        <GradientTypography size={"h4"} weight={"bold"}>
          {children}
        </GradientTypography>
      ) : (
        <Typography size={"h4"} weight={"normal"}>
          {children}
        </Typography>
      )}
    </StyledNavOption>
  );
};

const StyledNavOption = styled.div.attrs(
  ({ onClick }: HTMLAttributes<HTMLElement>) => ({
    onClick,
  })
)`
  :hover {
    cursor: pointer;
    opacity: 75%;
  }
`;

const GradientTypography = styled(Typography)`
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
