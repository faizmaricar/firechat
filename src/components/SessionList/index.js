import React from "react"
import { List } from "@material-ui/core"

import "normalize.css"

import SessionItem from "../SessionItem"

import styles from "./styles"
import { database } from "../../firebase"

const SessionList = () => {
  const { sessionsList } = styles()
  const [sessions, setSessions] = React.useState({})
  const [selectedSession, setSelectedSession] = React.useState(null)

  React.useEffect(() => {
    database
      .ref("/sessions")
      .on("value", snapshot => setSessions(snapshot.val()))
  }, [])

  return (
    <List className={sessionsList}>
      {sessions &&
        Object.keys(sessions).map(sessionKey => (
          <SessionItem
            onClickItem={() => setSelectedSession(sessionKey)}
            selected={selectedSession === sessionKey}
            sessionId={sessionKey}
            label={sessions[sessionKey].name}
            lastMessage={sessions[sessionKey].lastMessage}
          />
        ))}
    </List>
  )
}

export default SessionList
