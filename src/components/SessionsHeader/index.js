import React from "react"
import { Toolbar, Avatar, InputBase, IconButton } from "@material-ui/core"
import { Person, Add } from "@material-ui/icons"

import styles from "./styles"
import { Session } from "../../firebase/utils"

const SessionsHeader = () => {
  const { firstToolbar, input } = styles()

  const [newSession, setNewSession] = React.useState("")

  const handleChange = ({ target: { value } }) => setNewSession(value)
  const handleClick = () => {
    if (newSession) {
      const session = new Session(newSession)
      session.createSession()
      setNewSession("")
    }
  }

  return (
    <Toolbar className={firstToolbar}>
      <Avatar>
        <Person />
      </Avatar>
      <InputBase
        className={input}
        placeholder="Create chat session"
        onChange={handleChange}
      />
      <IconButton>
        <Add onClick={handleClick} />
      </IconButton>
    </Toolbar>
  )
}

export default SessionsHeader
