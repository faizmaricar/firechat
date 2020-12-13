import { makeStyles } from "@material-ui/core/styles"

export default makeStyles(theme => ({
  messagesContainer: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}))
