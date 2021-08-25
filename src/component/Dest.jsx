import React from "react";
// importing material ui
import { makeStyles, TextField } from "@material-ui/core";
// customise material ui
const useStyles = makeStyles({
  text: {
    minWidth: 376,
    
  },
});

function Dest(props) {
  const classes = useStyles();
  return (
    <form noValidate autoComplete="off">
      <TextField
        // id="outlined-basic"
        label="Destination"
        variant="outlined"
        className={classes.text}
      />
    </form>
  );
}

export default Dest;
