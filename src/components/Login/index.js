import React from "react"
import { navigate } from "gatsby"
import { Grid, Typography, Paper, TextField, Button } from "@material-ui/core"

import "normalize.css"
import styles from "./styles"
import { auth } from "../../firebase"

const Login = () => {
  const { container, formContainer, text, field } = styles()

  const [login, setLogin] = React.useState({ email: "", password: "" })

  const goToChat = () => navigate("/chat", { replace: true })

  const handleChange = ({ target: { name, value } }) =>
    setLogin(prevState => ({ ...prevState, [name]: value }))

  const handleLogin = () => {
    const { email, password } = login

    auth
      .signInWithEmailAndPassword(email, password)
      .then(user => goToChat())
      .catch(error => {
        switch (error.code) {
          case "auth/user-not-found":
            auth
              .createUserWithEmailAndPassword(email, password)
              .then(user => goToChat())
              .catch(error => {
                console.log(error)
              })
            break
          default:
            break
        }
      })
  }

  React.useEffect(() => {
    auth.onAuthStateChanged(user => user && goToChat())
  }, [])

  return (
    <Grid className={container} container alignItems="center" justify="center">
      <Grid item xs={3}>
        <Paper className={formContainer} elevation={1}>
          <Typography className={text} variant="h4">
            FireChat
          </Typography>
          <Typography className={text} variant="h5">
            Sign in
          </Typography>
          <Typography className={text} variant="subtitle1">
            Enter your email and password
          </Typography>
          <Grid container alignItems="center" justify="center">
            <TextField
              className={field}
              fullWidth
              label="Email"
              variant="outlined"
              name="email"
              value={login.email}
              onChange={handleChange}
            />
            <TextField
              className={field}
              fullWidth
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              value={login.password}
              onChange={handleChange}
            />
            <Button
              className={[field, formContainer]}
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleLogin}
            >
              Login
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Login
