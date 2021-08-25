import React from "react";
// importing from material ui
import {
  FormControl,
  InputLabel,
  MenuItem,
  makeStyles,
  Select,
} from "@material-ui/core";

// customise material ui components
const useStyles = makeStyles({
  formControl: {
    minWidth: 381,
    minHeight: 10,
    borderRadius: 2,
    background: "#fff",
    boxShadow:
      "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
  },
  mainText: {
    color: "#202021",
    fontSize: "14px",
    fontWeight: 600,
  },
});

function Selects(props) {
  const classes = useStyles();
  const [demo, setDemo] = React.useState("");

  const handleChange = (event) => {
    setDemo(event.target.value);
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel
        id="demo-simple-select-outlined-label"
        className={classes.mainText}
      >
        Select Token
      </InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={demo}
        onChange={handleChange}
        label="Select Token"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Demo1</MenuItem>
        <MenuItem value={20}>Demo2</MenuItem>
      </Select>
    </FormControl>
  );
}

export default Selects;
