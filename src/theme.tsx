import { red } from "@material-ui/core/colors"
import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  typography: {
    // subtitle1: {
    //   color: "#7D7987",
    // },
    fontFamily: [
      'semplicitapro',
      'acumin-pro',
      'Helvetica',
      'Roboto',
      'sans-serif',
    ].join(','),
  },
  palette: {
    type: "light",
    primary: {
      main: "#4361EE",
    },
    secondary: {
      main: "#4895EF",
      light: "#70A7FF",
    }
    // error: {
    //   main: red.A400,
    // },
    // background: {
      // default: "#fff",
      // default: "#dddfff",
    // },
    // text: {
    //   primary: "#000",
    //   secondary: "#7D7987",
    //   disabled: "#CCC",
    //   hint: "#7D7987",
    // },
  },
  shape: {
    borderRadius: 20,
  },
})

export default theme
