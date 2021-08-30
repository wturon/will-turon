import { BrowserRouter, Switch } from "react-router-dom";
import { GalleryPage } from "../Pages/Home/Gallery/GalleryPage";
import { Home } from "../Pages/Home/Home";
import { RouteWrapper } from "./RouteWrapper";

export const Router = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <RouteWrapper path="/gallery" Component={GalleryPage} exact />
      <RouteWrapper path="/" Component={Home} />
    </Switch>
  </BrowserRouter>
);
