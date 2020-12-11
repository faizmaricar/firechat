import { makeStyles } from "@material-ui/core/styles"

export default makeStyles(theme => ({
  container: {
    minHeight: "100vh",
  },
  formContainer: {
    padding: theme.spacing(2),
  },
  text: {
    textAlign: "center",
  },
  field: {
    marginTop: theme.spacing(1),
  },
}))
