import React from "react"

import styles from "./styles"
import Message from "../Message"
import { getAllMessagesBySession } from "../../firebase/utils"

const ChatMessages = ({ selectedSession }) => {
  const { messagesContainer } = styles()
  const [messages, setMessages] = React.useState([])

  React.useEffect(() => {
    getAllMessagesBySession(selectedSession).on("value", snapshot => {
      if (snapshot.val()) {
        setMessages(Object.values(snapshot.val()))
      } else {
        setMessages([])
      }
    })
  }, [selectedSession])

  return (
    <div className={messagesContainer}>
      {messages.map(message => (
        <Message from={message.sentBy} message={message.messageText} />
      ))}
    </div>
  )
}

export default ChatMessages
