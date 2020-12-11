import { makeStyles } from "@material-ui/core/styles"

export default makeStyles(theme => ({
  firstToolbar: {
    backgroundColor: theme.palette.grey[200],
    paddingRight: theme.spacing(0.5),
  },
  input: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
  },
}))
