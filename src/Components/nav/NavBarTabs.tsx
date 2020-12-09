import { createStyles, makeStyles, Tab, Tabs, Theme } from '@material-ui/core';
import React from 'react';
import EmojiFoodBeverageOutlined from '@material-ui/icons/EmojiFoodBeverageOutlined';
import ServicesIcon from '@material-ui/icons/Apps';
import ApplicationIcon from '@material-ui/icons/CalendarToday';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => createStyles({
    hideable: {
        display: 'none',
        [theme.breakpoints.up('lg')]: {
        display: 'block',
        }
    }
}));

export const NavBarTabs = () => {
    const [value, setValue] = React.useState('one');

    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setValue(newValue);
    };

    const styles = useStyles();

    return (
        <Tabs className={styles.hideable} value={value} onChange={handleChange}>
            <NavLink to='/' style={{color:'inherit', textDecoration:'none' }}> 
                <Tab          
                    value="one"
                    label="Serendipity Studio"
                    icon={<EmojiFoodBeverageOutlined/>}                
                    id = "1"
                />
            </NavLink>        
            <NavLink to='/grid' style={{color:'inherit', textDecoration:'none' }}> 
                <Tab 
                    value="two" 
                    label="Services" 
                    id="2"
                    icon={<ServicesIcon/>} 
                />
            </NavLink>               
            <Tab 
                value="three" 
                label="Booking" 
                id="3"
                icon={<ApplicationIcon/>} 
            />        
        </Tabs>
    )
}
   