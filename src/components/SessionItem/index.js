import React from "react"
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Divider,
  Avatar,
} from "@material-ui/core"
import { Delete } from "@material-ui/icons"

import styles from "./styles"

import { database } from "../../firebase"

const SessionItem = props => {
  const { sessionId, label, lastMessage, selected, onClickItem } = props
  const { itemContainer, itemIcon } = styles()

  const handleDelete = () => {
    database.ref(`/sessions/${sessionId}`).remove()
  }

  return (
    <>
      <ListItem
        className={itemContainer}
        onClick={onClickItem}
        selected={selected}
      >
        <ListItemAvatar className={itemIcon}>
          <Avatar>{label[0].toUpperCase()}</Avatar>
        </ListItemAvatar>
        <ListItemText primary={label} secondary={lastMessage} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
            <Delete />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </>
  )
}

export default SessionItem
