import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Hidden from "@material-ui/core/Hidden"
import Drawer from "@material-ui/core/Drawer"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import List from "@material-ui/core/List"

interface Props {
  companyName: string
}

const useStyles = makeStyles(theme => ({
  appBar: {
    // color: "#233348",
    backgroundColor: theme.palette.primary.main,
    position: "fixed",
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  drawerList: {
    width: 250,
  },
  drawerToggle: {
    padding: 20,
  },
}))

const Header = ({ companyName }: Props) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  const navLinks = [
    { displayText: "Home", scrollTo: "home" },
    { displayText: "About", scrollTo: "about" },
    { displayText: "Features", scrollTo: "features" },
    // { displayText: "Testimonials", link: "#testimonials" },
    // { displayText: "Blog", link: "#blog" },
  ]

  return (
    <React.Fragment>
      <AppBar elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Hidden smUp>
            <IconButton
              className={classes.drawerToggle}
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography
            variant="h6"
            color="inherit"
            className={classes.toolbarTitle}
          >
            <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>Trackversal</Link>
          </Typography>

          <Hidden xsDown>
            {navLinks.map(item => (
              <Button
                color="inherit"
                key={item.displayText}
                onClick={() => {
                  if (document.getElementById(item.scrollTo) != null) {
                    window.scrollTo(
                      0,
                      document.getElementById(item.scrollTo).offsetTop -
                        document.getElementsByTagName("header")[0].offsetHeight
                    )
                  }
                }}
              >
                {item.displayText}
              </Button>
            ))}
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="left"
        open={open}
        onEscapeKeyDown={handleDrawerClose}
        onBackdropClick={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <List className={classes.drawerList}>
          {navLinks.map((item, index) => (
            <ListItem button key={item.displayText} onClick={() => {
              window.scrollTo(
                0,
                document.getElementById(item.scrollTo).offsetTop -
                  document.getElementsByTagName("header")[0].offsetHeight
              );
              setOpen(false);
            }}>
              <ListItemText primary={item.displayText} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </React.Fragment>
  )
}

Header.propTypes = {
  companyName: PropTypes.string,
}

Header.defaultProps = {
  companyName: `Trackversal`,
}

export default Header
