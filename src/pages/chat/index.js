import React from "react"
import { navigate } from 'gatsby';
import { Grid, AppBar } from '@material-ui/core';

import styles from './styles';
import { auth } from '../../firebase';

const { root, chatHeader } = styles;

const ChatPage = () => (
    <div className={root}>
        <Grid container spacing={3}>
            <Grid className={chatHeader} item sm={5}>
                <AppBar>Sessions</AppBar>
            </Grid>
            <Grid className={chatHeader} item sm={7}>
                 <AppBar>chat</AppBar>
            </Grid>
        </Grid>
        <h1>Chat</h1>
        <button type="button" onClick={() => {
            auth.signOut()
                .then(() => navigate('/', { replace: true }))
                .catch((error) => console.log(error));
        }}>Logout</button>
    </div>
)

export default ChatPage
