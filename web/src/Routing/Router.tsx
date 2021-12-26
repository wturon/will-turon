import { BrowserRouter, Switch } from "react-router-dom";
import { GalleryPage } from "../Pages/Gallery/GalleryPage";
import { Home } from "../Pages/Home/Home";
import { UploadPage } from "../Pages/Upload/UploadPage";

import { RouteWrapper } from "./RouteWrapper";

export const Router = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <RouteWrapper path="/gallery" Component={GalleryPage} exact />
      <RouteWrapper path="/upload" Component={UploadPage} />
      <RouteWrapper path="/" Component={Home} />
    </Switch>
  </BrowserRouter>
);
