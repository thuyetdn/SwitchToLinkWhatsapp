import * as React from "react";
import ReactDOM from "react-dom";
import { createTheme, StyledEngineProvider } from "@mui/material/styles";
import App from "./App";
import { ThemeProvider } from "@mui/styles";

let theme = createTheme();
// theme = responsiveFontSizes(theme);

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StyledEngineProvider>,
  document.querySelector("#root")
);
