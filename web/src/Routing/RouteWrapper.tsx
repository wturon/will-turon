import { ComponentType, Suspense } from "react";
import { Route, RouteProps } from "react-router-dom";

type RouteWrapperProps = {
  readonly Component: ComponentType;
  readonly FallbackComponent?: ComponentType;
  readonly secure?: boolean;
} & RouteProps;

export const RouteWrapper = ({
  Component,
  FallbackComponent = DefaultFallbackComponent,
  secure = false,
}: RouteWrapperProps): JSX.Element => (
  <Route
    render={() => (
      <Suspense fallback={FallbackComponent}>
        <Component />
      </Suspense>
    )}
  />
);

const DefaultFallbackComponent = (): JSX.Element => <p>Couldn't find page!</p>;
