import { Container, CssBaseline, Grid, Paper, Typography } from '@material-ui/core'
import React, { Fragment } from 'react'
import { menuStyles } from './MainMenuStyles';

export const MainMenu = () => {

    const classes = menuStyles();

    return (
        <Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <main>
                <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(assets/images/serendipity2.jpg)` }}>
                    <div className={classes.overlay} />
                    <Grid container>
                        <Grid item md={6}>
                        <div className={classes.mainFeaturedPostContent}>
                            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            {'Serendipity Studio'}
                            </Typography>
                            <Typography variant="h5" color="inherit" paragraph>
                            {'Poner aqui una descripción de lo que es Serendipity Studio y las cosas principales que se hacen.'}
                            </Typography>
                        </div>
                        </Grid>
                    </Grid>
                </Paper>
                </main>            
            </Container>
        </Fragment>        
    )
}
