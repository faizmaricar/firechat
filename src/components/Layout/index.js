import React from "react"
import { Grid, List } from "@material-ui/core"

import "normalize.css"

import SessionsHeader from "../SessionsHeader"
import SessionItem from "../SessionItem"

import styles from "./styles"
import { database } from "../../firebase"

const Layout = () => {
  const { sessionsList } = styles()
  const [sessions, setSessions] = React.useState({})

  React.useEffect(() => {
    database
      .ref("/sessions")
      .on("value", snapshot => setSessions(snapshot.val()))
  }, [])
  return (
    <Grid container>
      <Grid item xs={3}>
        <SessionsHeader />
        <List className={sessionsList}>
          {sessions &&
            Object.keys(sessions).map(sessionKey => (
              <SessionItem
                sessionId={sessionKey}
                label={sessions[sessionKey].name}
                lastMessage={sessions[sessionKey].lastMessage}
              />
            ))}
        </List>
      </Grid>
      <Grid item xs={9}></Grid>
    </Grid>
  )
}

export default Layout
