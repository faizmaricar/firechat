import React from "react"
import { navigate } from "gatsby"
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core"

import styles from "./styles"
import { auth } from "../../firebase"

const Header = () => {
  const { title } = styles()
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={title}>
          FireChat
        </Typography>
        <Button
          color="inherit"
          onClick={() =>
            auth
              .signOut()
              .then(() => navigate("/", { replace: true }))
              .catch(error => console.log(error))
          }
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
