// @ts-nocheck
import { createTheme as createMuiTheme } from "@material-ui/core";
import { enUS } from "@material-ui/core/locale";

const theme = createMuiTheme();

const createTheme = () =>
  createMuiTheme(
    {
      palette: {
        text: {
          primary: "#20323F",
          secondary: "#989FA5",
        },
        common: {
          black: "#20323F",
          white: "#fff",
          stoneGrey: "#F9F8F6",
          accentGrey: "#878889",
          accentGrey2: "#D0D0D0",
          lightStone: "rgba(249, 248, 246, 0.6)",
        },
        background: {
          default: "#fff",
        },
        primary: {
          main: "#4BD4A7",
        },
        secondary: {
          main: "#4B7BD4",
        },
        digitalBlack: {
          50: "#EEEFF0",
          100: "#D8DDE1",
          300: "#989FA5",
          500: "#586269",
        },
        covidBlue: {
          50: "#F1F5FB",
          100: "#DBE5F6",
          200: "#B7CAEE",
          300: "#93B0E5",
          600: "#3C62AA",
        },
        covidGreen: {
          50: "#EDFBF6",
          100: "#DBF6ED",
          200: "#B7EEDC",
          300: "#93E5CA",
          600: "#3CAA86",
        },
        covidRed: {
          50: "#FEECE7",
          100: "#FDDAD1",
          300: "#F98F74",
          500: "#F54518",
        },
      },
      overrides: {
        MuiAlert: {
          root: {
            borderRadius: 8,
          },
        },
        MuiButton: {
          root: {
            borderRadius: 8,
            textTransform: "none",
            padding: theme.spacing(1.5, 2),
            [theme.breakpoints.down("sm")]: {
              fontSize: 14,
            },
          },
          outlined: {
            padding: "11px 16px",
          },
          contained: {
            padding: theme.spacing(1.5, 2),
          },
          containedPrimary: {
            color: "#fff",
          },
          text: {
            fontSize: 16,
            padding: theme.spacing(1.5, 2),
            [theme.breakpoints.down("sm")]: {
              fontSize: 14,
            },
          },
        },
        MuiInputLabel: {
          outlined: {
            transform: "translate(14px, 17px) scale(1)",
            [theme.breakpoints.down("sm")]: {
              transform: "translate(14px, 12px) scale(1)",
            },
          },
        },
        MuiOutlinedInput: {
          root: {
            borderRadius: 8,
            lineHeight: "1.1876em",
          },
          input: {
            paddingTop: 14.5,
            paddingBottom: 14.5,
            height: 48,
            boxSizing: "border-box",
          },
        },
      },
      typography: {
        h1: {
          fontSize: 42,
          lineHeight: "64px",
          [theme.breakpoints.down("sm")]: {
            fontSize: 32,
            lineHeight: "48px",
          },
          fontWeight: 500,
        },
        h2: {
          fontSize: 34,
          lineHeight: "52px",
          [theme.breakpoints.down("sm")]: {
            fontSize: 24,
            lineHeight: "36px",
          },
          fontWeight: 500,
        },
        h3: {
          fontSize: 24,
          lineHeight: "24px",
          [theme.breakpoints.down("sm")]: {
            fontSize: 20,
            lineHeight: "24px",
          },
          fontWeight: 500,
        },
        h4: {
          fontSize: 20,
          lineHeight: "30px",
          [theme.breakpoints.down("sm")]: {
            fontSize: 16,
            lineHeight: "24px",
          },
          fontWeight: 500,
        },
        h5: {
          fontSize: 16,
          lineHeight: "24px",
          [theme.breakpoints.down("sm")]: {
            fontSize: 14,
          },
          fontWeight: 500,
        },
        body1: {
          fontSize: 16,
          lineHeight: "28px",
          [theme.breakpoints.down("sm")]: {
            fontSize: 14,
            lineHeight: "24px",
          },
        },
        body2: {
          fontSize: 14,
          lineHeight: "24px",
          [theme.breakpoints.down("sm")]: {
            fontSize: 12,
          },
        },
        caption: {
          fontSize: 13,
          lineHeight: "19px",
          [theme.breakpoints.down("sm")]: {
            fontSize: 12,
          },
          fontWeight: 600,
        },
        button: {
          fontSize: 16,
          lineHeight: "24px",
          [theme.breakpoints.down("sm")]: {
            fontSize: 14,
          },
          fontWeight: 600,
        },
        fontFamily: [
          "Poppins",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ].join(","),
      },
    },
    enUS
  );

export default createTheme;
