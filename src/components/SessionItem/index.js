import React from "react"
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Avatar,
} from "@material-ui/core"
import { Delete } from "@material-ui/icons"

import styles from "./styles"

const SessionItem = props => {
  const { label, lastMessage, selected, onClickItem, onDelete } = props
  const { itemContainer, itemIcon } = styles()
  return (
    <ListItem
      divider
      className={itemContainer}
      onClick={onClickItem}
      selected={selected}
    >
      <ListItemAvatar className={itemIcon}>
        <Avatar>{label[0].toUpperCase()}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={label} secondary={lastMessage} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={onDelete}>
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default SessionItem
