import * as React from 'react';
import { Typography, Link } from '@material-ui/core';

export const Copyright = () => {

    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/sagi770/">
                Sagi Tawil
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}
