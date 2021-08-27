import { BrowserRouter, Switch } from "react-router-dom";
import { Home } from "../Pages/Home";
import { RouteWrapper } from "./RouteWrapper";

export const Router = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <RouteWrapper path="/" Component={Home} />
    </Switch>
  </BrowserRouter>
);
