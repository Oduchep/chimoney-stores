import { DefaultLayout } from '.';

const layouts = {
  default: DefaultLayout,
};

const LayoutWrapper = ({ children, ...other }) => {
  const Layout = layouts[children.type.layout];

  if (Layout != null) {
    return <Layout {...other}>{children}</Layout>;
  }

  return <DefaultLayout {...other}>{children}</DefaultLayout>;
};

export default LayoutWrapper;
