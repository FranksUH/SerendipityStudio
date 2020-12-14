import { makeStyles } from '@material-ui/core';
import React from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: theme.palette.background.paper,
      // marginTop: theme.spacing(24),
      display: 'flex',
      margin: 'auto',
      flexDirection: 'column',
      alignContent: 'center',
      justifyContent: 'flex-end'
    },
  }));

interface IProps
{
    description: string,
    title: string
}

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export const Footer = (props: IProps) => {

    const classes = useStyles();
    const { description, title } = props;

    return (
        <footer className={classes.footer}>
          <Container maxWidth="lg">
            <Typography variant="h6" align="center" gutterBottom>
              {title}
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
              {description}
            </Typography>
            <Copyright />
          </Container>
        </footer>
      );
}
