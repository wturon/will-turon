import { ComponentType, Suspense } from "react";
import { Route, RouteProps } from "react-router-dom";
import { DefaultLayout } from "../Layouts/DefaultLayout";

type RouteWrapperProps = {
  readonly Component: ComponentType;
  readonly FallbackComponent?: ComponentType;
  readonly secure?: boolean;
  readonly Layout?: ComponentType;
} & RouteProps;

export const RouteWrapper = ({
  Component,
  FallbackComponent = DefaultFallbackComponent,
  Layout = DefaultLayout,
  secure = false,
}: RouteWrapperProps): JSX.Element => (
  <Route
    render={() => (
      <Suspense fallback={FallbackComponent}>
        <Layout>
          <Component />
        </Layout>
      </Suspense>
    )}
  />
);

const DefaultFallbackComponent = (): JSX.Element => <p>Couldn't find page!</p>;
