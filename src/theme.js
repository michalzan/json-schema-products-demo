// @ts-nocheck
import { createTheme as createMuiTheme } from "@material-ui/core";
import { enUS } from "@material-ui/core/locale";

const theme = createMuiTheme({
  palette: {
    text: {
      primary: "#20323F",
      secondary: "#989FA5",
    },
    common: {
      black: "#20323F",
      white: "#fff",
      green: "#4BD4A7",
      stoneGrey: "#F9F8F6",
      accentGrey: "#878889",
      accentGrey2: "#D0D0D0",
      lightStone: "rgba(249, 248, 246, 0.6)",
    },
    primary: {
      main: "#4BD4A7",
      light: "rgba(75, 212, 167, 0.16)",
    },
    background: {
      default: "#fff",
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
});

const createTheme = () =>
  createMuiTheme(
    {
      ...theme,
      overrides: {
        MuiButton: {
          root: {
            minWidth: 48,
            borderRadius: 8,
            textTransform: "none",
            padding: theme.spacing(1.5, 2),
            [theme.breakpoints.down("sm")]: {
              fontSize: 14,
            },
            "&:hover": {
              "@media (hover: none)": {
                backgroundColor: "rgba(75, 212, 167, 0.04)",
              },
            },
          },
          outlined: {
            padding: "11px 16px",
            [theme.breakpoints.down("sm")]: {
              padding: "11px",
            },
          },
          outlinedPrimary: {
            border: `1px solid ${theme.palette.covidGreen[200]}`,
            "&:hover": {
              border: `1px solid ${theme.palette.covidGreen[200]}`,
              backgroundColor: theme.palette.primary.light,
              "@media (hover: none)": {
                backgroundColor: theme.palette.light,
              },
            },
          },
          contained: {
            boxShadow:
              "0px 0px 1px rgba(0, 0, 0, 0.08), 0px 1px 1px rgba(0, 0, 0, 0.06), 0px 1px 2px rgba(0, 0, 0, 0.12)",
            padding: theme.spacing(1.5, 2),
          },
          containedPrimary: {
            color: theme.palette.common.white,
            "&:hover": {
              backgroundColor: theme.palette.primary.main,
              background:
                "linear-gradient(0deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16))",
              boxShadow:
                "0px 2px 4px rgba(0, 0, 0, 0.04), 0px 4px 5px rgba(0, 0, 0, 0.03), 0px 1px 10px rgba(0, 0, 0, 0.06)",
            },
            "&$focusVisible": {
              backgroundColor: theme.palette.primary.main,
              background:
                "linear-gradient(0deg, rgba(255, 255, 255, 0.32), rgba(255, 255, 255, 0.32))",
              boxShadow:
                "0px 8px 10px rgba(0, 0, 0, 0.04), 0px 3px 14px rgba(0, 0, 0, 0.03), 0px 4px 5px rgba(0, 0, 0, 0.06)",
            },
            "&$disabled": {
              color: theme.palette.common.white,
            },
          },
          text: {
            fontSize: 16,
            padding: theme.spacing(1.5, 2),
            [theme.breakpoints.down("sm")]: {
              fontSize: 14,
            },
          },
          textPrimary: {
            "&:hover": {
              "@media (hover: none)": {
                backgroundColor: "rgba(75, 212, 167, 0.04)",
              },
            },
          },
        },
        MuiOutlinedInput: {
          root: {
            borderRadius: 8,
            lineHeight: "1.1876em",
            "&:hover $notchedOutline": {
              borderColor: theme.palette.digitalBlack[500],
            },
            "&$focused $notchedOutline": {
              borderWidth: 1,
              borderColor: theme.palette.primary.main,
            },
            "&$error $notchedOutline": {
              borderColor: theme.palette.covidRed[500],
            },
            "&$disabled $notchedOutline": {
              borderColor: "#EEEFF0",
            },
          },
          input: {
            paddingTop: 14.5,
            paddingBottom: 14.5,
            height: 48,
            boxSizing: "border-box",
            color: theme.palette.digitalBlack[500],
            "&::placeholder": {
              color: theme.palette.digitalBlack[300],
              opacity: 0.5,
            },
            "&$disabled": {
              color: "rgba(61, 61, 61, 0.24)",
            },
          },
          notchedOutline: {
            borderColor: theme.palette.digitalBlack[100],
          },
          adornedEnd: {
            paddingRight: "7px",
            "& .MuiIconButton-root": {
              padding: "4px",
            },
          },
        },
        MuiFormHelperText: {
          root: {
            fontWeight: 400,
            fontSize: "13px",
            "&$error": {
              color: theme.palette.covidRed[500],
            },
          },
        },
        MuiFormControlLabel: {
          root: {
            color: theme.palette.digitalBlack[500],
            "& a": {
              color: theme.palette.covidBlue[600],
            },
          },
        },
        MuiAutocomplete: {
          inputRoot: {
            '&[class*="MuiOutlinedInput-root"]': {
              padding: "0 65px 0 8px",
              "& .MuiAutocomplete-endAdornment": {
                right: "7px",
              },
            },
          },
          paper: {
            boxShadow:
              "0px 8px 10px rgba(0, 0, 0, 0.04), 0px 3px 14px rgba(0, 0, 0, 0.03), 0px 4px 5px rgba(0, 0, 0, 0.06)",
            borderRadius: "8px",
          },
          option: {
            "&:hover": {
              backgroundColor: theme.palette.common.white,
              color: theme.palette.primary.main,
            },
            '&[aria-selected="true"]': {
              backgroundColor: theme.palette.primary.light,
              color: theme.palette.text.primary,
            },
            '&[data-focus="true"]': {
              backgroundColor: "rgba(75, 212, 167, 0.06)",
              color: theme.palette.primary.main,
            },
            "&:active": {
              backgroundColor: theme.palette.primary.light,
              color: theme.palette.text.primary,
            },
          },
        },
        MuiMenu: {
          paper: {
            boxShadow:
              "0px 8px 10px rgba(0, 0, 0, 0.04), 0px 3px 14px rgba(0, 0, 0, 0.03), 0px 4px 5px rgba(0, 0, 0, 0.06)",
            borderRadius: "8px",
          },
        },
        MuiMenuItem: {
          root: {
            fontWeight: 500,
            color: theme.palette.digitalBlack[500],
            "&$selected": {
              backgroundColor: theme.palette.primary.light,
              color: theme.palette.text.primary,
              "&:hover": {
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.text.primary,
              },
            },
            "&:hover": {
              backgroundColor: theme.palette.common.white,
              color: theme.palette.primary.main,
            },
            "& .MuiTouchRipple-root": {
              color: theme.palette.covidGreen[300],
            },
          },
        },
        MuiListItem: {
          root: {
            "&$focusVisible": {
              backgroundColor: "rgba(75, 212, 167, 0.06)",
              color: theme.palette.primary.main,
            },
          },
        },
        MuiSelect: {
          select: {
            "&:focus": {
              backgroundColor: "transparent",
            },
          },
        },
        MuiPaper: {
          elevation1: {
            boxShadow:
              "0px 0px 1px rgba(0, 0, 0, 0.08), 0px 1px 1px rgba(0, 0, 0, 0.06), 0px 1px 2px rgba(0, 0, 0, 0.12)",
          },
          elevation2: {
            boxShadow:
              "0px 8px 10px 0px rgba(0, 0, 0, 0.06), 0px 6px 30px 0px rgba(0, 0, 0, 0.03), 0px 16px 24px 0px rgba(0, 0, 0, 0.04)",
          },
          elevation3: {
            boxShadow:
              "0px 24px 38px rgba(0, 0, 0, 0.04), 0px 9px 46px rgba(0, 0, 0, 0.03), 0px 11px 15px rgba(0, 0, 0, 0.06)",
          },
          elevation4: {
            boxShadow:
              "0px 5px 6px 0px rgba(0, 0, 0, 0.04), 0px 3px 16px 0px rgba(0, 0, 0, 0.02), 0px 9px 12px 0px rgba(0, 0, 0, 0.04)",
            [theme.breakpoints.down("sm")]: {
              boxShadow:
                "0px 4px 5px 0px rgba(0, 0, 0, 0.06), 0px 3px 14px 0px rgba(0, 0, 0, 0.03), 0px 8px 10px 0px rgba(0, 0, 0, 0.04)",
            },
          },
          elevation8: {
            boxShadow:
              "0px 24px 38px rgba(0, 0, 0, 0.04), 0px 9px 46px rgba(0, 0, 0, 0.03), 0px 11px 15px rgba(0, 0, 0, 0.06)",
          },
          rounded: {
            borderRadius: 8,
          },
        },
        MuiPickersCalendarHeader: {
          iconButton: {
            color: theme.palette.digitalBlack[500],
            transition: "box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            boxShadow:
              "0px 0px 1px rgba(32, 50, 63, 0.08), 0px 1px 1px rgba(32, 50, 63, 0.06), 0px 1px 2px rgba(32, 50, 63, 0.12)",
            "&:hover": {
              backgroundColor: "transparent",
              boxShadow:
                "0px 2px 4px rgba(32, 50, 63, 0.04), 0px 4px 5px rgba(32, 50, 63, 0.03), 0px 1px 10px rgba(32, 50, 63, 0.06)",
            },
          },
          switchHeader: {
            marginBottom: theme.spacing(1),
            [theme.breakpoints.down("sm")]: {
              marginLeft: "8px",
              marginRight: "8px",
            },
            "& p": {
              textTransform: "capitalize",
              fontWeight: 500,
              fontSize: "20px",
              [theme.breakpoints.down("sm")]: {
                fontSize: "16px",
              },
            },
            "& button": {
              width: "56px",
              height: "56px",
              [theme.breakpoints.down("sm")]: {
                width: "48px",
                height: "48px",
              },
            },
          },
          transitionContainer: {
            height: "30px",
            [theme.breakpoints.down("sm")]: {
              height: "24px",
            },
          },
          daysHeader: {
            maxHeight: "48px",
            height: "48px",
            [theme.breakpoints.down("sm")]: {
              height: "40px",
            },
          },
          dayLabel: {
            margin: "0 1px",
            width: "46px",
            color: theme.palette.text.secondary,
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "24px",
            [theme.breakpoints.down("sm")]: {
              fontSize: "12px",
              width: "40px",
              margin: "0",
            },
          },
        },
        MuiPickersBasePicker: {
          pickerView: {
            padding: theme.spacing(1, 2, 2),
            // width of cell * days in week + margin * 2
            maxWidth: `${48 * 7 + 20 * 2}px`,
            [theme.breakpoints.down("sm")]: {
              maxWidth: `${40 * 7 + 20 * 2}px`,
            },
          },
        },
        MuiPickersCalendar: {
          transitionContainer: {
            marginTop: "8px",
            minHeight: `288px`,
            [theme.breakpoints.down("sm")]: {
              minHeight: `240px`,
            },
          },
          week: {
            margin: "0",
          },
        },
        MuiPickersDay: {
          day: {
            color: theme.palette.digitalBlack[500],
            borderRadius: 8,
            // height and width are actually 48px with the margin
            width: "46px",
            height: "46px",
            margin: "1px",
            "& p": {
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "24px",
            },
            [theme.breakpoints.down("sm")]: {
              width: "40px",
              height: "40px",
              margin: 0,
              "& p": {
                fontSize: "12px",
              },
            },
            "& .MuiTouchRipple-root": {
              color: theme.palette.covidGreen[300],
            },
          },
          daySelected: {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.digitalBlack[500],
            "&:hover": {
              backgroundColor: theme.palette.primary.light,
            },
          },
          dayDisabled: {
            color: "rgba(61, 61, 61, 0.24)",
            textDecoration: "line-through",
          },
        },
        MuiPickersDatePickerRoot: {
          toolbar: {
            backgroundColor: theme.palette.covidGreen[50],
          },
        },
        MuiPickersToolbarText: {
          toolbarTxt: {
            color: theme.palette.digitalBlack[300],
          },
          toolbarBtnSelected: {
            color: theme.palette.text.primary,
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
