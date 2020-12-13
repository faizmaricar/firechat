import React from "react"
import { Card, CardHeader } from "@material-ui/core"

import styles from "./styles"

function Message({ from, message, sent = true }) {
  const { messageContainer } = styles(sent)
  return (
    <Card className={messageContainer}>
      <CardHeader title={message} subheader={from} />
    </Card>
  )
}

export default Message
