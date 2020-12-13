import { makeStyles } from "@material-ui/core/styles"

export default makeStyles(theme => {
  return {
    messageContainer: sent => {
      return {
        marginBottom: theme.spacing(1),
        width: "300px",
        color: theme.palette.primary.contrastText,
        backgroundColor: sent
          ? theme.palette.primary.main
          : theme.palette.secondary.main,
        alignSelf: sent ? "flex-end" : "flex-start",
      }
    },
  }
})
