import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Image from "./image"
import Hidden from "@material-ui/core/Hidden"
import { makeStyles } from "@material-ui/core"
import HeroSvg from '../images/globe.svg';

let roughNotation =
  typeof window !== `undefined` ? require("react-rough-notation") : null

const styles = makeStyles(theme => ({
  heroContainer: {
    backgroundColor: theme.palette.primary.main,
    position: "relative",
  },
}))

const Hero = () => {
  const classes = styles()

  const multiline = false
  const color = "purple"
  const animationDelay = "500"
  const animationDuration = 1000

  const RoughNotation = roughNotation && roughNotation.RoughNotation
  const RoughNotationGroup = roughNotation && roughNotation.RoughNotationGroup

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
          color="textSecondary"
          style={{ marginBottom: 20, zIndex: 800, fontWeight: 600 }}
        >
          A better, cheaper way to keep track of your belongings
        </Typography>

        <Typography
          variant="h5"
          color="textSecondary"
          style={{ marginBottom: 30, zIndex: 800 }}
        >
          Stop paying 
          {RoughNotationGroup && RoughNotation && (
            <RoughNotationGroup show={true}>
              <RoughNotation
                type="underline"
                color={"yellow"}
                multiline={multiline}
                animationDelay={animationDelay}
                animationDuration={animationDuration}
                strokeWidth="2"
              >
                &nbsp;costly subscriptions&nbsp;
              </RoughNotation>
              or settle for
              <RoughNotation
                type="underline"
                color={"orange"}
                multiline={multiline}
                animationDelay={animationDelay}
                animationDuration={animationDuration}
              >
                &nbsp;limited range&nbsp;
              </RoughNotation>
            </RoughNotationGroup>
          )}
          , and get started with Trackversal!
        </Typography>
        <Button variant="contained" color="primary" size="large" onClick={() => { navigate("/coming-soon") }}>
          Get yours today!
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
            <HeroSvg style={{ zIndex: 800 }} />
          </div>
        </Grid>
      </Hidden>
    </Grid>
  )
}
export default Hero
