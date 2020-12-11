import { makeStyles } from "@material-ui/core/styles"

export default makeStyles(theme => ({
  itemContainer: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  itemIcon: {
    marginLeft: theme.spacing(1),
  },
}))
