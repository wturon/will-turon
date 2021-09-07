import { Navbar } from "../Components/Navbar";

type DefaultLayoutProps = React.HTMLAttributes<HTMLElement>;

export const DefaultLayout = ({
  children,
}: DefaultLayoutProps): JSX.Element => (
  <>
    <Navbar />
    {children}
  </>
);
