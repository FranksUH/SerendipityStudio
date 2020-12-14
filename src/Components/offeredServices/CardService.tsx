import { Badge, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import { IServiceItem } from '../../Domain/ServicesItem';
import ShareIcon from '@material-ui/icons/Share';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

export const CardService = (props: IServiceItem) => {

    const {Id, Name, Description, Price, Likes, ImageURL} = props;

    return (
        <Card id={Id}>
            <CardHeader 
                title={Name}
            />
            <CardMedia image={ImageURL ?? ''} style={{height: '150px'}}/>
            <CardContent>
                <Typography variant='body1' component='p'>
                    {Description}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton aria-label='cart'>
                        <Badge badgeContent={Likes} max={999} color='primary' anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}>
                        <ThumbUpIcon/>
                    </Badge>
                </IconButton>
                <IconButton>
                    <ShareIcon/>
                </IconButton>
                <Typography variant='body1' component='p' style={
                    {
                        display: 'flex',
                        flex: 1,
                        justifyContent: 'flex-end',
                        marginRight: '12px'
                        }}>
                    {`${Price} $`}
                </Typography>
            </CardActions>
        </Card>        
    )
}
