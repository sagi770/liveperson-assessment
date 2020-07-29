import * as React from 'react';
import {  Card,  CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Country } from '../interfaces';

interface CountryProps extends Country {
    name: string;
}

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%',
    },
    cardContent: {
        flexGrow: 1,
    }
}));

export const CountryCube = (props: CountryProps) => {
    const classes = useStyles();

    return (
        <Grid item key={props.name} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image={props.flag}
                    title="Country Flag"
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.name}
                    </Typography>
                    <Typography>
                        Country Code: {props.alpha2Code}
                    </Typography>
                    {(props.capital !== "" ?
                        <Typography>
                            Capital City: {props.capital}
                        </Typography> : null)
                    }
                    <Typography>
                        Languages: {props.languages.map((lang, i) => `${lang.name} ${(i !== (props.languages.length - 1) ? ', ' : '')}`)}
                    </Typography>
                    <Typography>
                        Border Countries: {props.borders.map((border, i) => `${border} ${(i !== (props.borders.length - 1) ? ', ' : '')}`)}
                    </Typography>
                    <Typography>
                        Timezones: {props.timezones.map((timezone, i) => `${timezone} ${(i !== (props.timezones.length - 1) ? ', ' : '')}`)}
                    </Typography>
                    <Typography>
                        Currencies: {props.currencies.map((currency, i) => `${currency.name} (${currency.symbol}) ${(i !== (props.currencies.length - 1) ? ', ' : '')}`)}
                    </Typography>

                    <Typography>
                        Top Level Domain: {props.topLevelDomain.map((domain, i) => `${domain} ${(i !== (props.topLevelDomain.length - 1) ? ', ' : '')}`)}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}