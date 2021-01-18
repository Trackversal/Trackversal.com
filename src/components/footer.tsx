import React from "react"
import Grid from "@material-ui/core/Grid"
import AppBar from "@material-ui/core/AppBar"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Hidden from "@material-ui/core/Hidden"
import Link from "@material-ui/core/Link"
import { makeStyles } from "@material-ui/core"

const footerStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
  },
  footerBar: {
    backgroundColor: theme.palette.secondary.main,
  }
}));

const Footer = () => {
  const classes = footerStyles();
  const footerLinks = [
    {
      title: "Company",
      items: [
        { displayText: "Contact us: contact@trackversal.com", url: "mailto:contact@trackversal.com" },
        // {
        //   displayText: "Testimonials",
        //   url: "",
        // },
        // { displayText: "Find a Doctor", url: "" },
        // { displayText: "Apps", url: "" },
      ],
    },
    // {
    //   title: "Region",
    //   items: [
    //     { displayText: "India", url: "" },
    //     { displayText: "Indonesia", url: "" },
    //     { displayText: "Singapore", url: "" },
    //     { displayText: "Canada", url: "" },
    //   ],
    // },
    // {
    //   title: "Help",
    //   items: [
    //     { displayText: "Help Center", url: "" },
    //     { displayText: "Contact Support", url: "" },
    //     { displayText: "Instructions", url: "" },
    //     { displayText: "How it works", url: "" },
    //   ],
    // },
  ]

  return (
    <React.Fragment>
      <AppBar position="static" elevation={0}>
        <Box className={`footer ${classes.footer}`}>
          <Grid color="primary"
            container
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              minHeight: 250,
              // color: "#FFF",
            }}
          >
            <Grid
              xs={12}
              sm={6}
              item
              container
              direction="column"
              justify="space-evenly"
              style={{ padding: 10 }}
            >
              <Typography variant="h4" color="inherit">
                Trackversal
              </Typography>
              <Typography variant="body2" color="inherit">
                The ultimate asset tracking ecosystem.
              </Typography>
              <Typography variant="body2" color="inherit">
                ©Trackversal 2021. All rights reserved
              </Typography>
            </Grid>

            <Hidden xsDown>
              {footerLinks.map(footerMenu => (
                <Grid
                  item
                  xs={12}
                  sm={2}
                  container
                  direction="column"
                  justify="space-evenly"
                  key={footerMenu.title}
                >
                  <Typography variant="h5" color="inherit">
                    {footerMenu.title}
                  </Typography>
                  {footerMenu.items.map(link => (
                    <Link color="inherit" variant="body2" key={link.displayText} href={link.url}>
                      {link.displayText}
                    </Link>
                  ))}
                </Grid>
              ))}
            </Hidden>
          </Grid>
        </Box>
        {/* <Box className={`attribution ${classes.footerBar}`}>
          <Grid
            container
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              // color: "#FFF",
              paddingLeft: 5,
              paddingRight: 5,
            }}
            direction="row"
            justify="space-between"
            alignItems="center"
            className={classes.footerBar}
          >
            <Typography variant="body2" color="inherit">
              
              The Trackversal Project, {" "}
              <a
                href="https://trackversal.com/"
                target="_blank"
                style={{ color: "#FFF" }}
              >
                2021 ©
              </a>
            </Typography>
          </Grid>
        </Box> */}
      </AppBar>
    </React.Fragment>
  )
}
export default Footer
