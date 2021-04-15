import { Button, createStyles, FormControl, Grid, InputLabel, makeStyles, MenuItem, Select, Snackbar, Theme, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { services } from '../offeredServices/constantData'
import {KeyboardDatePicker, MuiPickersUtilsProvider, KeyboardTimePicker} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import {IBookingProps} from './IBookingProps'

const BookingForm: React.FC<IBookingProps> = (props: IBookingProps) => {    

    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const [selectedServiceId, setSelectedServiceId] = useState('');
    const [booked, setBooked] = useState(false);

    const useStyles = makeStyles((theme: Theme) => createStyles({
        gridMenu: {
            margin:'50px', 
            justifyContent:'center',
            alignContent: 'center'
        }}
    ));

    const styles = useStyles();

    return (
       <Grid container className={styles.gridMenu} spacing={4}>
           <Grid item lg={4} xl={4} md={8} sm={6} xs={12}>
                <Typography variant='h2' component='p'>
                    Book yourself!
                </Typography>
           </Grid>
           <Grid item lg={12} xl={12} md={12} sm={12} xs={12}></Grid>
           <Grid item lg={4} xl={4} md={8} sm={6} xs={12}>
                <Typography variant='h5' component='p'>
                    Select a service
                </Typography>
                <FormControl variant="outlined" style={{margin:'auto', minWidth:120}}>
                    <InputLabel id="demo-simple-select-outlined-label">Service</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={selectedServiceId}
                    onChange={(event: React.ChangeEvent<{ value: unknown }>)=> {setSelectedServiceId(event.target.value as string)}}
                    label='Service'
                >
                    <MenuItem value="">
                        <em>None</em>                    
                    </MenuItem>
                    {services.map(service => 
                        (
                            <MenuItem value={service.Id} key={service.Id}>
                                {service.Name}
                            </MenuItem>
                        ))}
                </Select>
            </FormControl>
           </Grid>
           <Grid item lg={12} xl={12} md={12} sm={12} xs={12}></Grid>
           <Grid item lg={4} xl={4} md={8} sm={6} xs={12}>
                <Typography variant='h5' component='p'>
                    Select the date
                </Typography>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    margin="normal"
                    onChange={(date: Date| null)=> {setSelectedDate(date)}}
                    id="date-picker-dialog"
                    label="Theese are our available dates"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    disablePast={true}
                    shouldDisableDate={(date) => 
                        {
                            if(date !== null && (date.getDay() === 1 || date.getDay() === 0))
                                return true;
                            return false;
                        }}
                />
                </MuiPickersUtilsProvider>                
           </Grid>
           <Grid item lg={12} xl={12} md={12} sm={12} xs={12}></Grid>
           <Grid item lg={4} xl={4} md={8} sm={6} xs={12}>
                <Typography variant='h5' component='p'>
                    Select the time
                </Typography>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardTimePicker
                        margin="normal"
                        id="time-picker"
                        label="Select"
                        value={selectedDate}
                        onChange={(date: Date| null)=> {setSelectedDate(date)}}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}                        
                        />                       
                </MuiPickersUtilsProvider>
            </Grid>
            <Grid item lg={12} xl={12} md={12} sm={12} xs={12}></Grid>
            <Grid item lg={3} xl={3} md={6} sm={8} xs={8}  style={
                    {
                        display: 'flex', 
                        justifyContent: 'flex-end', 
                        alignContent: 'flex-start'
                    }}>
                <Button variant='contained' onClick={()=>{setBooked(true)}}>
                        Ready!
                </Button>
            </Grid>
            <Snackbar 
                anchorOrigin= {{
                    vertical: 'bottom',
                    horizontal: 'right'
                }}
                open={booked}
                autoHideDuration={2000}
                message="Successfully booked!"
                onClose={()=>{setBooked(false)}}
            />
       </Grid>      
    )
}

export default BookingForm;
