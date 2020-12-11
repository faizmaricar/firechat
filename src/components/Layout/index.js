import React from "react"
import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  Avatar,
  InputBase,
  Divider,
  IconButton,
} from "@material-ui/core"
import { Person, Add, ExitToApp } from "@material-ui/icons"

import "normalize.css"
import styles from "./styles"

const Layout = () => {
  const { firstToolbar, input } = styles()

  return (
    <Grid container>
      <Grid item xs={3}>
        <Toolbar className={firstToolbar}>
          <Avatar>
            <Person />
          </Avatar>
          <InputBase className={input} placeholder="Create chat session" />
          <IconButton>
            <Add />
          </IconButton>
          <IconButton>
            <ExitToApp />
          </IconButton>
        </Toolbar>
      </Grid>
      <Grid item xs={9}></Grid>
    </Grid>
  )
}

export default Layout
