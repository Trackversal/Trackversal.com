import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Services from "../components/services"
import AboutPanel from "../components/about-panel"
import Testimonials from "../components/testimonials"
import Articles from "../components/articles"
import NewsletterPanel from "../components/newsletter"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import theme from "../theme"
import AppsPanel from "../components/apps-panel"
import { CssBaseline } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"

import "../css/main.css"

const ComingSoonPage = () => (
  // <Layout>
  //   <SEO title="Coming Soon" />
  //   <h1>Hi from the second page</h1>
  //   <p>Welcome to page 2</p>
  //   <Link to="/">Go back to the homepage</Link>
  // </Layout>

  <React.Fragment>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        {/* <SEO title="Trackversal" description="The ultimate asset tracking system" /> */}
        <Typography variant="h5" color="inherit" style={{ marginTop: 50, zIndex: 800 }}>
          Uh oh! You caught us before we're ready! 🎉🎉🎉
        </Typography>
        <NewsletterPanel />
        {/* <AboutPanel /> */}
        {/* <Services id="features" /> */}
        {/* <AppsPanel /> */}
        {/* <Testimonials /> */}
        {/* <Articles /> */}
        
      </Layout>
    </ThemeProvider>
  </React.Fragment>
)

export default ComingSoonPage
