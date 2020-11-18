import { Tab, Tabs } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar/AppBar';
import React from 'react';
import EmojiFoodBeverageOutlined from '@material-ui/icons/EmojiFoodBeverageOutlined';
import ServicesIcon from '@material-ui/icons/Apps';
import ApplicationIcon from '@material-ui/icons/CalendarToday';
import DeployButton from '../verticalMenu/deployButton';

// const NavBarStyles = {
//     default: 
//     {
//         fixed: "top"
//     }
// }


export const NavBar = () => {
    const [value, setValue] = React.useState('one');

    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setValue(newValue);
    };


    return (
    <div className= "topNavBar">        
        <AppBar position="fixed">
            <Tabs value={value} onChange={handleChange}>
                    <Tab          
                        value="one"
                        label="Serendipity Studio"
                        icon={<EmojiFoodBeverageOutlined/>}
                        id = "1"
                    />
                    <Tab 
                        value="two" 
                        label="Servicios" 
                        id="2"
                        icon={<ServicesIcon/>} 
                    />
                    <Tab 
                        value="three" 
                        label="Reservar" 
                        id="3"
                        icon={<ApplicationIcon/>} 
                    />
                    <div className="login-menu">
                        <ul className="align-rigth">  
                            <li>                                                      
                                <DeployButton/>
                            </li>
                        </ul>
                    </div>                        
            </Tabs>
        </AppBar>
    </div>
    )
}
   