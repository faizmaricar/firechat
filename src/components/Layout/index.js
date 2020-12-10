import React from 'react';
import { AppBar, Typography, Container } from '@material-ui/core';

import styles from './styles';

function Layout({children}) {
    const { header, main } = styles();
    return (
        <div>
            <AppBar className={header}>
                <Container>
                    <Typography variant="h6" >FireChat</Typography>
                </Container>
            </AppBar>
            <Container className={main}>
                {children}
            </Container>
            
        </div>
    )
}

export default Layout
