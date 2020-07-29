import * as React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export const Header = () => {

    return (
        <AppBar position="relative">
            <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    LivePerson Countries Assignment
                </Typography>
            </Toolbar>
        </AppBar>
    )
}



