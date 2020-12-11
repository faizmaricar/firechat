import React from "react"
import { Toolbar, Typography } from "@material-ui/core"

import styles from "./styles"

const ChatHeader = ({ label }) => {
  const { chatToolbar } = styles()

  return (
    <Toolbar className={chatToolbar}>
      <Typography variant="subtitle1">{label}</Typography>
    </Toolbar>
  )
}

export default ChatHeader
