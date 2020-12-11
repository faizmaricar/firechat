import { makeStyles } from "@material-ui/core/styles"

export default makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    overflow: "hidden",
  },
  mainContainer: {
    flexGrow: 1,
    display: "flex",
  },
  sessionsContainer: {
    flexGrow: 1,
    borderRight: `1px solid ${theme.palette.grey[400]}`,
  },
  chatContainer: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
  },
  input: {
    flexGrow: 1,
    marginLeft: theme.spacing(1),
  },
}))
