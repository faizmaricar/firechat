import React from "react"
import { Toolbar, InputBase, Button } from "@material-ui/core"

import styles from "./styles"

const ChatInput = () => {
  const { input, inputContainer } = styles()

  return (
    <Toolbar className={inputContainer}>
      <InputBase className={input} placeholder="Send message..." />
      <Button color="primary" variant="contained">
        Send
      </Button>
    </Toolbar>
  )
}

export default ChatInput
