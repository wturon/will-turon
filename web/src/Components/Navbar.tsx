import styled from "styled-components";
import { HTMLAttributes } from "react";
import { useHistory, useLocation } from "react-router";
import { Typography } from "./Typography";
import { addOpacityToColor } from "../Theme/theme";
import { useAuth0 } from "@auth0/auth0-react";

export const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <NavbarContainer>
      <NavBarOptionContainer>
        <NavOption route={"/"}>Home</NavOption>
        <NavOption route={"/gallery"}>Gallery</NavOption>
      </NavBarOptionContainer>
      <AdminNavBarOptions>
        <Button onClick={() => loginWithRedirect()}>Sign in</Button>
      </AdminNavBarOptions>
    </NavbarContainer>
  );
};

const Button = styled.div`
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 0.1rem solid #ffffff;
  border-radius: 0.2rem;
  color: #ffffff;
  transition: all 0.05s;
  :hover {
    color: #000000;
    background-color: #ffffff;
    cursor: pointer;
  }
`;

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
