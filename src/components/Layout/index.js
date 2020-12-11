import React from "react"
import { Grid } from "@material-ui/core"

import "normalize.css"

import styles from "./styles"

import Header from "../Header"
import SessionsHeader from "../SessionsHeader"
import SessionList from "../SessionList"
import ChatHeader from "../ChatHeader"
import ChatMessages from "../ChatMessages"
import ChatInput from "../ChatInput"

import { database } from "../../firebase"

const Layout = () => {
  const { root, mainContainer, sessionsContainer, chatContainer } = styles()

  const [sessions, setSessions] = React.useState({})
  const [selectedSession, setSelectedSession] = React.useState(null)

  React.useEffect(() => {
    database
      .ref("/sessions")
      .on("value", snapshot => setSessions(snapshot.val()))
  }, [])
  return (
    <div className={root}>
      <Header />
      <Grid className={mainContainer} container>
        <Grid className={sessionsContainer} item xs={3}>
          <SessionsHeader />
          <SessionList
            sessions={sessions}
            selectedSession={selectedSession}
            setSelectedSession={setSelectedSession}
          />
        </Grid>
        {sessions && selectedSession && (
          <Grid className={chatContainer} item xs={9}>
            <ChatHeader label={sessions[selectedSession].name} />
            <ChatMessages />
            <ChatInput />
          </Grid>
        )}
      </Grid>
    </div>
  )
}

export default Layout
