import { makeStyles } from "@material-ui/core/styles"

export default makeStyles(theme => ({
  itemContainer: {
    "&.Mui-selected": {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
  itemIcon: {
    marginLeft: theme.spacing(1),
  },
}))
