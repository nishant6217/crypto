import React from "react";
// importing material ui
import { makeStyles, TextField } from "@material-ui/core";
// customise material ui
const useStyles = makeStyles({
  text: {
    minWidth: 303,
  },
});

function InputField(props) {
  const classes = useStyles();
  return (
    <form noValidate autoComplete="off" style={{ paddingRight: 10 }}>
      <TextField
        // id="outlined-basic"
        label="Enter Amount"
        variant="outlined"
        className={classes.text}
      />
    </form>
  );
}

export default InputField;
