import React from "react"
import { Card, CardHeader } from "@material-ui/core"

import styles from "./styles"

function Message({ from, message }) {
  const { messageContainer } = styles()
  return (
    <Card className={messageContainer}>
      <CardHeader title={message} subheader={from} />
    </Card>
  )
}

export default Message
