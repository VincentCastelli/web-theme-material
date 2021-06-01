import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

export default function ThemeRC(props) {
  // base values
  const borderRadius = 4;
  const spacing = 8;
  // colors
  const primaryColor = "#0A84FF";
  const buttonBorderColor = "rgba(0, 0, 0, 0.12)";
  const lightBackground = "#ffffff";


  const O2theme = createMuiTheme({
    // defaults overrides
    props: {
      MuiAppBar: {
        color: "default"
      },
      MuiButton: {
        color: "primary"
      },
      MuiTextField: {
        size: "small",
      }
    },
    shape: {
      borderRadius
    },
    spacing,
    // palette
    palette: {
      primary: {
        main: primaryColor
      }
    },
    // other overrides
    overrides: {
      MuiFab: {
        // Name of the css prop from the API
        root: {
          // JSS styles
          backgroundColor: lightBackground
        }
      },
      MuiDrawer: {
        paperAnchorLeft: {
          marginTop: spacing,
          borderTopRightRadius: borderRadius
        },
        paperAnchorRight: {
          marginTop: spacing,
          borderTopLeftRadius: borderRadius
        },
      },
      MuiAppBar: {
        colorDefault: {
          backgroundColor: lightBackground
        }
      },
      MuiButton: {
        outlined: {
          borderColor: buttonBorderColor
        },
        outlinedPrimary: {
          borderColor: buttonBorderColor
        }
      }
    }
  });

  return (
    <ThemeProvider theme={O2theme}>
      {props.children}
    </ThemeProvider>
  );
}
