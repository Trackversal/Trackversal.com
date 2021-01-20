import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Image from "./image"
import Hidden from "@material-ui/core/Hidden"
import { makeStyles } from "@material-ui/core"
import HeroSvg from '../images/globe.svg';

const styles = makeStyles(theme => ({
  heroContainer: {
    backgroundColor: theme.palette.secondary.light,
    position: "relative",
  },
}))

const Hero = () => {
  const classes = styles()
  return (
    <Grid
      container
      spacing={3}
      style={{ height: 'calc(100vh + 1rem)' }}
      className={classes.heroContainer}
      id="home"
    >
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style={{ position: "absolute", height: "100%", width: "100%" }}
      >
        <path
          d="M-0.84,91.28 C279.62,224.50 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
          style={{ stroke: "none", fill: "#99c0FF" }}
        ></path>
      </svg>
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style={{ position: "absolute", height: "100%", width: "100%" }}
      >
        <path
          d="M-59.53,178.13 C210.78,82.39 246.32,40.95 526.24,120.88 L500.00,150.00 L-21.72,175.16 Z"
          style={{ stroke: "none", fill: "#DCD6FFdd", }}
        ></path>
      </svg>
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style={{ position: "absolute", height: "100%", width: "100%" }}
      >
        <path
          d="M-25.11,131.73 C210.78,82.39 256.49,184.03 500.84,97.20 L500.00,150.00 L-21.72,175.16 Z"
          style={{ stroke: "none", fill: "#FFEBFFcc" }}
        ></path>
      </svg>
      <Grid
        item={true}
        xs={12}
        sm={6}
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
        style={{ paddingLeft: 40, paddingRight: 40, maxWidth: 600, margin: 'auto' }}
      >
        <Typography
          variant="h3"
          color="inherit"
          style={{ marginBottom: 20, zIndex: 800, fontWeight: 600 }}
        >
          A better, cheaper way to keep track of your belongings
        </Typography>

        <Typography
          variant="h5"
          style={{ marginBottom: 30, zIndex: 800 }}
        >
          Trackversal is the universal asset tracking solution you've been looking for.
        </Typography>
        <Button variant="contained" color="primary" size="large" disabled>
          Closed beta coming soon
        </Button>
      </Grid>
      <Hidden xsDown>
        <Grid
          item={true}
          sm={6}
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
          style={{ padding: 10 }}
        >
          <div style={{ width: "100%", zIndex: 800 }}>
            <HeroSvg style={{zIndex: 800}}/>
          </div>
        </Grid>
      </Hidden>
    </Grid>
  )
}
export default Hero
