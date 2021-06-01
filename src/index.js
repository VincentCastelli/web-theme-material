import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

export default function ThemeRC(props) {
  // base values
  const borderRadius = props.borderRadius;
  const spacing = props.spacing;
  // colors
  const primaryColor = props.primaryColor;
  const buttonBorderColor = props.buttonBorderColor;
  const lightBackground = props.lightBackground;


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

ThemeRC.defaultProps = {
  borderRadius: 4,
  spacing: 8,
  primaryColor: "#0A84FF",
  buttonBorderColor: "rgba(0, 0, 0, 0.12)",
  lightBackground: "#ffffff"
}
