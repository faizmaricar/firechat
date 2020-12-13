import React from "react"
import { Toolbar, InputBase, Button } from "@material-ui/core"

import styles from "./styles"
import { Message } from "../../firebase/utils"

const ChatInput = ({ selectedSession, user }) => {
  const { input, inputContainer } = styles()
  const [messageText, setMessageText] = React.useState("")

  const handleChange = ({ target: { value } }) => {
    setMessageText(value)
  }
  const handleSubmit = () => {
    if (messageText) {
      const message = new Message(messageText, selectedSession, user)
      message.sendMessage()
      setMessageText("")
    }
  }
  return (
    <Toolbar className={inputContainer}>
      <InputBase
        className={input}
        placeholder="Send message..."
        value={messageText}
        onChange={handleChange}
      />
      <Button color="primary" variant="contained" onClick={handleSubmit}>
        Send
      </Button>
    </Toolbar>
  )
}

export default ChatInput
