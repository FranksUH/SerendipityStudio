import { Grid } from '@material-ui/core'
import React from 'react'
import { IServiceItem } from '../../Domain/ServicesItem'
import { CardService } from './CardService'
import { services } from './constantData'

export const OfferedServices = () => {

    const oferedServices: IServiceItem[] = services;

    return (
        <Grid container spacing={2} style={{margin:'20px'}}>
            {oferedServices.map((service: IServiceItem) => 
                (<Grid item lg={4} md={6} xs={12}>
                    <CardService {...service}/>
                </Grid>)
            )}
        </Grid>        
    )
}
