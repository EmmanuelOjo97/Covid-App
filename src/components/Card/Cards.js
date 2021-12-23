import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import styles from "./Card.module.css";
import cx from "classnames";
import CountUp from "react-countup";

function Cards({ data: { confirmed, deaths, lastUpdate } }) {
  const mortatlityRate = (confirmed, deaths) => {
    const mortRate = (deaths / confirmed) * 100;
    return mortRate;
  };

  if (!confirmed) {
    return (
      <Typography variant="h4" color="primary">
        Loading Data
      </Typography>
    );
  }

  return (
    <div>
      <Grid container spacing={3}>
        <Grid
          item
          component={Card}
          xs={12}
          md={12}
          align="center"
          className={cx(styles.card, styles.test1)}
        >
          <CardContent>
            <Typography variant="h4">
              Last Updated:
              <Box
                sx={{
                  fontWeight: "bold",
                  color: "success.main",
                  m: 1,
                  display: "inline",
                }}
              >
                {new Date(lastUpdate).toDateString()}
              </Box>
            </Typography>
            <Typography align="center" component="span">
              Global Confirmed Covid cases:{" "}
              <Box
                sx={{
                  fontWeight: "bold",
                  m: 1,
                  display: "inline",
                }}
              >
                <CountUp
                  end={confirmed.value}
                  duration={2}
                  start={confirmed.value / 2}
                  separator=","
                />
              </Box>
            </Typography>
            <Box
              sx={
                {
                  // display: "flex",
                }
              }
            >
              <Typography align="center" component="span">
                Global Confirmed Covid Deaths:{" "}
                <Box
                  sx={{
                    fontWeight: "bold",
                    color: "error.main",
                    m: 1,
                    display: "inline",
                  }}
                >
                  <CountUp
                    end={deaths.value}
                    duration={2}
                    start={deaths.value / 2}
                    separator=","
                  />
                </Box>
              </Typography>
            </Box>
            <Typography gutterBottom align="center" component={"span"}>
              Global Mortality Rate: {""}
              <Box
                sx={{
                  fontWeight: "bold",
                  color: "error.main",
                  display: "inline",
                  m: 1,
                }}
              >
                {mortatlityRate(confirmed.value, deaths.value).toFixed(2)}%
              </Box>
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}

export default Cards;
