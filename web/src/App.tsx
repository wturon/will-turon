import styled, { ThemeProvider } from "styled-components";
import { Router } from "./Routing/Router";
import { theme } from "./Theme/theme";

const AppWrapper = styled.div`
  height: 100%;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Router />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
