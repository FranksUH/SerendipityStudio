import { Tab, Tabs } from '@material-ui/core';
import React from 'react';
import EmojiFoodBeverageOutlined from '@material-ui/icons/EmojiFoodBeverageOutlined';
import ServicesIcon from '@material-ui/icons/Apps';
import ApplicationIcon from '@material-ui/icons/CalendarToday';
import { useHistory } from 'react-router-dom';
import APP_ROUTES from './../../routes';
import { navBarStyles } from './ThemeStyles';

export const NavBarTabs = () => {
    const [value, setValue] = React.useState(0);
    const history = useHistory();

    const handleChange = (val:number, to: string) => {
        setValue(val);
        history.push(to);
    };

    const styles = navBarStyles();

    return (
        <Tabs className={styles.hideable} value={value}>
            <Tab          
                label="Serendipity Studio"
                icon={<EmojiFoodBeverageOutlined/>}
                onClick={() => handleChange(0, APP_ROUTES.homePage)}
            />
            <Tab 
                label="Services"
                icon={<ServicesIcon/>} 
                onClick={() => handleChange(1, APP_ROUTES.servicesGrid)}
            />
            <Tab
                label="Booking"
                icon={<ApplicationIcon/>} 
                onClick={() => handleChange(2, APP_ROUTES.book)}
            />        
        </Tabs>
    )
}
   