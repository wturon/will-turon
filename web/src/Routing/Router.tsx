import { BrowserRouter, Switch } from "react-router-dom";
import { GalleryPage } from "../Pages/Gallery/GalleryPage";
import { Home } from "../Pages/Home/Home";
import { SignIn } from "../Pages/SignIn/SignIn";
import { RouteWrapper } from "./RouteWrapper";

export const Router = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <RouteWrapper path="/gallery" Component={GalleryPage} exact />
      <RouteWrapper path="/signin" Component={SignIn} />
      <RouteWrapper path="/" Component={Home} />
    </Switch>
  </BrowserRouter>
);
