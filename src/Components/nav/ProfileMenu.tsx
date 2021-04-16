import { Menu, MenuItem } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import React from 'react';

interface IProps {
    anchorElement: HTMLElement | null;
    isOpen: boolean;
    handleClose: ()=>void;
    idElem: string;
};

export const ProfileMenu = ({anchorElement, isOpen, handleClose, idElem}: IProps) => {
    return (
        <Menu
            anchorEl={anchorElement}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={idElem}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isOpen}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose}> <SettingsIcon style={{marginRight: '8px'}}/> Manage Profile</MenuItem>
            <MenuItem onClick={handleClose}> <ExitToAppIcon style={{marginRight: '8px'}}/> Log out</MenuItem>
        </Menu>
    )
};
