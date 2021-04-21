import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const dialogStyles = makeStyles((theme: Theme) => createStyles({
    dialogButton: {
        color: theme.palette.success.dark
    },
    cancelButton: {
        color: theme.palette.error.dark
    },
    inputFields: {
        marginBottom: '10px',
        "& .MuiOutlinedInput-input": {
            backgroundColor: "white",
            color: "black"
          },
        "& .MuiOutlinedInput-root": {
            backgroundColor: "white",
            color: "black"
          }
    }
  }));