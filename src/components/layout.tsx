/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import Box from "@material-ui/core/Box"
import { ThemeProvider } from "@material-ui/core"
import theme from "../theme"
import Hero from "./hero"

interface Props {
  children?: any
}

const Layout = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Box
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.5rem 1.0875rem 1.45rem`,
        }}
      >
        {children}
      </Box>
      <Footer />
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
