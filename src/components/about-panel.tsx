import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Image from "./image"
import Hidden from "@material-ui/core/Hidden"
import Bar from "./bar"
import PlaceholderSvg from "../images/placeholder.svg"

const AboutPanel = () => {
  return (
    <Grid container spacing={3} style={{ minHeight: 500 }} id="about">
      <Grid
        item={true}
        xs={12}
        sm={6}
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
        style={{ paddingLeft: 40, paddingRight: 40 }}
      >
        <Typography variant="h4" color="inherit">
          About Trackversal
        </Typography>
        <Bar />
        <Typography
          variant="subtitle1"
          style={{ marginBottom: 30, marginTop: 20 }}
        >
          {/* Trackversal is an asset tracking device for the masses. While bluetooth trackers have great battery life, it doesn't 
          provide that feeling of assurance when you get out of range. Meanwhile, traditional GPS trackers have exceptionally short
          battery life and requires hefty monthly fees. Trackversal extracts the best of both worlds, and deliver a solution that's suitable for anyone from a student who wants to protect their bike to industrial asset tracking applications. */}

          Trackversal is a compact and modern find-my-things tracker that can be attached to valuables such as wallets, pets, and bicycles. 
          Why stick with traditional GPS trackers that haven’t improved much in years and continuously suffer from costly subscription 
          fees to abysmal battery life, or bluetooth trackers that relies on having phones nearby?
          Try Trackversal, and become one of the first early adopters of a cutting-edge IoT solution that people actually need -- by tracking your belongings only when you need it, instead 
          of wastefully draining battery and incurring data charges when you don’t.
        </Typography>
        {/* <Button variant="outlined" color="primary" size="large">
          Learn More
        </Button> */}
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
          <div style={{ width: '100%' }}>
            <PlaceholderSvg attribution="City vector created by vectorjuice" style={{ width: '100%', height: '100%' }} />
          </div>
        </Grid>
      </Hidden>
    </Grid>
  )
}
export default AboutPanel
