import React from "react";
// importing Material-ui
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  Box,
  CardMedia,
} from "@material-ui/core";

// importing fonts
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";

// importing icon from material ui
import { SyncAlt, ExpandMore } from "@material-ui/icons";

const useStyles = makeStyles({
  main: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: 297,
  },
  pic: {
    height: 79,
    width: 58,
    paddingLeft: 10,
  },
  iconss: {
    fontSize: 60,
  },
  intext: {
    fontWeight: 600,
    fontSize: 14,
  },
  header: {
    fontWeight: 600,
    fontSize: 14,
  },
  alt: {
    padding: "80px 30px 0px 30px",
  },
  exp: {
    paddingLeft: 32,
  },
});

function CardItem(props) {
  const classes = useStyles();
  return (
    <Box className={classes.main}>
      <Box>
        <Box>
          <Typography className={classes.header}>From</Typography>
          <Card>
            {/* <CardMedia image="https://commons.wikimedia.org/wiki/File:Ethereum_logo.svg" /> */}
            <CardContent>
              <Box style={{ width: 115 }}>
                <FontAwesomeIcon icon={faEthereum} className={classes.iconss} />
                <Box style={{ paddingTop: 5, display: "flex" }}>
                  <Box>
                    <Typography className={classes.intext}>Ethereum</Typography>
                    <Typography className={classes.intext}>Network</Typography>
                  </Box>
                  <Box className={classes.exp}>
                    <ExpandMore />
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
      <Box className={classes.alt}>
        <SyncAlt />
      </Box>
      <Box>
        <Box>
          <Typography className={classes.header}>To</Typography>
          <Card>
            {/* <CardMedia image="https://www.logo.wine/a/logo/Binance/Binance-Icon-Logo.wine.svg" /> */}
            <CardContent>
              <Box style={{ width: 115 }}>
                {/* <FontAwesomeIcon icon={faEthereum} className={classes.iconss} /> */}
                <img
                  src="https://www.logo.wine/a/logo/Binance/Binance-Icon-Logo.wine.svg"
                  style={{ height: 56, position: "absolute" }}
                />
                <Box style={{ paddingTop: 65, display: "flex" }}>
                  <Box>
                    <Typography className={classes.intext}>Binance</Typography>
                    <Typography className={classes.intext}>Network</Typography>
                  </Box>
                  <Box className={classes.exp}>
                    <ExpandMore />
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}

export default CardItem;
