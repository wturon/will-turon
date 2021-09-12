import styled from "styled-components";
import { HTMLAttributes, useState } from "react";
import { useHistory } from "react-router";
import { Typography } from "./Typography";
import { addOpacityToColor } from "../Theme/theme";

export const Navbar = () => {
  const [selectedNav, setSelectedNav] = useState(window.location.pathname);
  const history = useHistory();

  const handleNavClick = (route: string) => {
    setSelectedNav(route);
    history.push(route);
  };
  return (
    <NavbarContainer>
      <NavBarOptionContainer>
        <NavOption
          selectedNav={selectedNav}
          route={"/"}
          onClick={() => handleNavClick("/")}
        >
          Home
        </NavOption>
        <NavOption
          selectedNav={selectedNav}
          route={"/gallery"}
          onClick={() => handleNavClick("/gallery")}
        >
          Gallery
        </NavOption>
      </NavBarOptionContainer>
      <AdminNavBarOptions>
        <NavOption
          selectedNav={selectedNav}
          route={"/gallery"}
          onClick={() => handleNavClick("/signin")}
        >
          Sign in
        </NavOption>
      </AdminNavBarOptions>
    </NavbarContainer>
  );
};

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
    addOpacityToColor(props.theme.card.darkGrey, 0.8)};
  backdrop-filter: blur(2px);
`;

type NavOptionProps = {
  selectedNav: string;
  route: string;
} & HTMLAttributes<HTMLDivElement>;

const NavOption = ({
  children,
  onClick,
  selectedNav,
  route,
}: NavOptionProps) => {
  return (
    <StyledNavOption onClick={onClick}>
      {selectedNav === route ? (
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
