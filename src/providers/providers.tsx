import { ThemeProvider } from "@mui/material";
import RouterProvider from "./RouterProvider/RouterProvider";

const Providers = () => {
  return (
    <ThemeProvider theme={""}>
      <RouterProvider />
    </ThemeProvider>
  );
};

export default Providers;
