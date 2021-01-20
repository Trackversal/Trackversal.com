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
import "../css/main.css"

const IndexPage = () => (
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <SEO title="Trackversal" description="The ultimate asset tracking system" />

        <AboutPanel />
        <Services id="features" />
        {/* <AppsPanel /> */}
        {/* <Testimonials /> */}
        {/* <Articles /> */}
        <NewsletterPanel />
      </Layout>
    </ThemeProvider>
  </React.Fragment>
)

export default IndexPage
