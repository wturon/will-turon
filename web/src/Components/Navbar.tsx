import styled from "styled-components";
import { HTMLAttributes, useState } from "react";
import { useHistory } from "react-router";
import { Typography } from "./Typography";
import { addOpacityToColor } from "../Theme/theme";

export const Navbar = () => {
  const [selectedNav, setSelectedNav] = useState("HOME");
  const history = useHistory();
  return (
    <NavbarContainer>
      <NavOption selectedNav={selectedNav} onClick={() => history.push("/")}>
        Home
      </NavOption>
      <NavOption
        selectedNav={selectedNav}
        onClick={() => history.push("/gallery")}
      >
        Gallery
      </NavOption>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  margin-top: 2%;
  margin-left: 5%;
  min-width: 12rem;
  display: flex;
  justify-content: space-between;
  position: fixed;
  background-color: ${(props) =>
    addOpacityToColor(props.theme.card.darkGrey, 0.5)};
  backdrop-filter: blur(2px);
`;

type NavOptionProps = {
  selectedNav: string;
} & HTMLAttributes<HTMLDivElement>;

const NavOption = ({ children, onClick, selectedNav }: NavOptionProps) => {
  return (
    <StyledNavOption onClick={onClick}>
      <Typography size={"h4"} weight={"normal"}>
        {children}
      </Typography>
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
