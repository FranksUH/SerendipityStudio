import { IconButton, Menu, MenuItem } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import React from 'react';

interface IProps {
    anchorElem: HTMLElement|null;
    idElem: string;
    isOpen: boolean;
    closeHandler: ()=>void;
    displayMenuHandler: (event: React.MouseEvent<HTMLElement>) => void;
}

export const ProfileMobilMenu = ({anchorElem, idElem, isOpen, closeHandler, displayMenuHandler}: IProps) => {
    return (
    <Menu
      anchorEl={anchorElem}      
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={idElem}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isOpen}
      onClose={closeHandler}
    >
      <MenuItem onClick={displayMenuHandler}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
    )
}

