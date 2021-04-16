import { Badge, IconButton, Menu, MenuItem } from '@material-ui/core';
import ServicesIcon from '@material-ui/icons/Apps';
import ApplicationIcon from '@material-ui/icons/CalendarToday';
import { EmojiFoodBeverageOutlined } from '@material-ui/icons';
import React from 'react';
import { NavLink } from 'react-router-dom';
import APP_ROUTES from './../../routes';

interface IProps {
    anchorElement: HTMLElement | null;
    idElem: string;
    onCloseHandler: ()=>void;
    isOpen: boolean;
}

export const NavBarMobilTabs = ({anchorElement, idElem, onCloseHandler, isOpen}: IProps) => {
    return (
        <Menu
            anchorEl={anchorElement}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={idElem}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isOpen}
            onClose={onCloseHandler}
        >
            <NavLink to={APP_ROUTES.homePage} style={{color:'inherit', textDecoration:'none' }}> 
                <MenuItem onClick={onCloseHandler}>
                    <IconButton aria-label="Serendipity Ico" color="inherit">
                        <Badge badgeContent={0} color="secondary">
                        <EmojiFoodBeverageOutlined/>
                        </Badge>
                    </IconButton>
                    <p>Serendipity Studio</p>
                </MenuItem>
            </NavLink>

            <NavLink to={APP_ROUTES.servicesGrid} style={{color:'inherit', textDecoration:'none' }}> 
                <MenuItem onClick={onCloseHandler}>
                    <IconButton aria-label="Services Ico" color="inherit">
                    <Badge badgeContent={0} color="secondary">
                        <ServicesIcon />
                    </Badge>
                    </IconButton>
                    <p>Services</p>
                </MenuItem>
            </NavLink>

            <NavLink to={APP_ROUTES.book} style={{color:'inherit', textDecoration:'none' }}> 
                <MenuItem onClick={onCloseHandler}>
                    <IconButton aria-label="Bookings Ico" color="inherit">
                    <Badge badgeContent={0} color="secondary">
                        <ApplicationIcon />
                    </Badge>
                    </IconButton>
                    <p>Booking</p>
                </MenuItem>
            </NavLink>
        </Menu>    
    )
}

