import React from "react"
import { Grid, Divider } from "@material-ui/core"

import "normalize.css"

import styles from "./styles"

import Header from "../Header"
import SessionsHeader from "../SessionsHeader"
import SessionList from "../SessionList"

const Layout = () => {
  const { sessionsContainer } = styles()
  return (
    <>
      <Header />
      <Grid container>
        <Grid className={sessionsContainer} item xs={3}>
          <SessionsHeader />
          <SessionList />
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={9}></Grid>
      </Grid>
    </>
  )
}

export default Layout
