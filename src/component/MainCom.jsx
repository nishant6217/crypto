import React from "react";
import { Typography, Box, makeStyles, Button } from "@material-ui/core";
// importing components
import Selects from "./Selects";
import InputField from "./InputField";
import Dest from "./Dest";
import CardItem from "./CardItem";

// customise styles
const useStyles = makeStyles({
  box: {
    paddingTop: 20,
    paddingLeft: 20,
    backgroundColor: "#D3D2F7",
    // height: "9",
    // width: "100vh",
    height: "100vh",
    margin: "auto",
  },
  inBox: {
    // paddingTop: 20,
    height: "90vh",
    width: "72vh",
    margin: "auto",
    background: "#F8F8FF",
    borderRadius: 25,
  },
  textAsse: {
    fontWeight: 600,
    color: "#202021",
    textAlign: "left",
    padding: "20px 0px 0px 44px",
  },
  selects: {
    paddingTop: "5px",
  },
  btn: {
    width: "376px",
    // background: rgb(82,92,198),
    background:
      "linear-gradient(45deg, rgba(82,92,198,1) 0%, rgba(81,92,200,1) 35%, rgba(131,29,66,1) 100%)",
    fontWeight: 600,
  },
  smlBtn: {
    background:
      "linear-gradient(45deg, rgba(82,92,198,1) 0%, rgba(81,92,200,1) 35%, rgba(131,29,66,1) 100%)",
    fontWeight: 600,
  },
  normal: {
    fontWeight: 600,
    color: "#202021",
    textAlign: "left",
    padding: "10px 0px 0px 44px",
  },
  normal1: {
    fontWeight: 600,
    color: "#202021",
    textAlign: "left",
    padding: "5px 0px 0px 44px",
  },
});

function MainCom(props) {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Box className={classes.inBox}>
        <Box className={classes.textAsse}>
          <Typography style={{ fontWeight: 600 }}>Assets</Typography>
          <Box className={classes.selects}>
            <Selects />
          </Box>
        </Box>
        <Box className={classes.normal}>
          <CardItem />
        </Box>
        <Typography className={classes.normal}>Amount</Typography>
        <Box className={classes.normal1} style={{ display: "flex" }}>
          <InputField />
          <Button
            variant="contained"
            color="secondary"
            className={classes.smlBtn}
            
          >
            MAX
          </Button>
        </Box>
        <Typography className={classes.normal}>Destination</Typography>
        <Box className={classes.normal1}>
          <Dest />{" "}
        </Box>
        <Box className={classes.normal} style={{ paddingTop: 20 }}>
          <Button variant="contained" color="secondary" className={classes.btn}>
            Connect Wallet
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default MainCom;
