import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#0000000"
      },      
      secondary: {
        main: "rgb(172, 172, 179)"
      },
      info: {
        light: "rgb(172, 172, 179)",
        main: "rgb(172, 172, 179)" //#7986cb
      },
      
    }
});
export default theme;