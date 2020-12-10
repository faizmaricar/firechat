import React from 'react'
import { Paper, Typography, Grid, TextField, Button } from '@material-ui/core';

import styles from './styles';
import { auth } from '../../firebase';

function Login() {
    const { formContainer, formBody, formField, formButton } = styles();
    
    const [login, setLogin] = React.useState({});
    
    const handleChange = ({ target: { name, value } }) => setLogin(prevState => ({...prevState, [name]: value }))

    const handleClick = () => {
        auth.signInWithEmailAndPassword(login.email, login.password)
            .then((user) => {
                console.log(user);
            })
            .catch((error) => {
                console.log('ERROR:', error);
                switch(error.code) {
                    case 'auth/user-not-found':
                        auth.createUserWithEmailAndPassword(login.email, login.password)
                            .then((user) => {
                                console.log(user);
                            })
                            .catch((error) => {
                                console.log('ERROR:', error);
                            })
                        break;
                    default:
                        break;
                }
            })

    }
    
    return (
        <Grid item xs={4} className={formContainer}>
            <Paper className={formBody} elevation={4}>
                <Typography variant="h6" >Login / Register</Typography>
                <TextField 
                    className={formField}
                    variant="outlined"
                    name="email"
                    label="Email"
                    value={login.email}
                    onChange={handleChange}
                />
                <TextField 
                    className={formField}
                    variant="outlined"
                    name="password"
                    label="Password"
                    value={login.password}
                    onChange={handleChange}
                    type="password"/>
                <Button
                    variant="contained"
                    color="secondary"
                    className={formButton}
                    onClick={handleClick} 
                >
                    Login / Register
                </Button>
            </Paper>
        </Grid>
    )
}

export default Login
