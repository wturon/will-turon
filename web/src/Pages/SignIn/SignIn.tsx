import styled from "styled-components";
import { Typography } from "../../Components/Typography";

export const SignIn = (): JSX.Element => (
  <Card>
    <Typography size={"h1"} weight={"bold"}>
      This page is currently under construction!
    </Typography>
  </Card>
);

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
