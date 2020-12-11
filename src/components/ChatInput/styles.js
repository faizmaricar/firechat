import { makeStyles } from "@material-ui/core/styles"

export default makeStyles(theme => ({
  inputContainer: {
    borderTop: `1px solid ${theme.palette.grey[400]}`,
    borderBottom: `1px solid ${theme.palette.grey[400]}`,
  },
  input: {
    flexGrow: 1,
    marginLeft: theme.spacing(1),
  },
}))
