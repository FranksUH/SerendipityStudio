import { Card, Grid, Typography } from '@material-ui/core'
import React, { Fragment } from 'react'
import { menuStyles } from './MainMenuStyles';

export const MainMenu = () => {

    const classes = menuStyles();

    return (
        <Fragment>
            <Grid container className={classes.mainFeaturedPost}>
                <Grid item>
                    <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                        {'Serendipity Studio'}
                    </Typography>
                    <Typography variant="h5" color="inherit" paragraph>
                        {'Poner aqui una descripción de lo que es Serendipity Studio y las cosas principales que se hacen.'}
                    </Typography>
                    <Card>                        
                        <img src={'assets/images/serendipity2.jpg'} alt={'Serendipity'} />
                    </Card>
                </Grid>
            </Grid>
        </Fragment>        
    )
}
