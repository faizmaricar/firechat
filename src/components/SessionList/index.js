import React from "react"
import { List } from "@material-ui/core"

import "normalize.css"

import SessionItem from "../SessionItem"

import styles from "./styles"
import { deleteSessionById } from "../../firebase/utils"

const SessionList = props => {
  const { sessions, selectedSession, setSelectedSession } = props
  const { sessionsList } = styles()

  const handleDelete = sessionId => {
    setSelectedSession(null)
    deleteSessionById(sessionId)
  }

  return (
    <List className={sessionsList}>
      {sessions &&
        Object.keys(sessions).map(sessionKey => (
          <SessionItem
            onClickItem={() => setSelectedSession(sessionKey)}
            onDelete={() => handleDelete(sessionKey)}
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
