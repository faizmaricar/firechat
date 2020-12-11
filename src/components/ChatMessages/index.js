import React from "react"

import styles from "./styles"

const ChatMessages = () => {
  const { messagesContainer } = styles()

  return <div className={messagesContainer}>Messages</div>
}

export default ChatMessages
