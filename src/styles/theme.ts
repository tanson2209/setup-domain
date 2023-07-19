import { createTheme } from "@mui/material/styles";

export const getMuiTheme = () =>
  createTheme({
    spacing: 4,
    typography: {
      fontFamily: '"Quicksand", "Roboto", "Helvetica", "Arial", sans-serif',
    },
  });
