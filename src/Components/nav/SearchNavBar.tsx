import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import styles from './StaticStyle.module.css';
import { NavBarTabs } from './NavBarTabs';
import { searchBarStyles } from './ThemeStyles';
import { ProfileMenu } from './ProfileMenu';
import { NavBarMobilTabs } from './NavBarMobilTabs';
import { ProfileMobilMenu } from './ProfileMobilMenu';

export default function SearchNavBar() {
  const classes = searchBarStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);
  const [mainMenuMobilAnchorEl, setMainMenuMobilAnchorEl] = useState<null | HTMLElement>(null);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMainMenuMobielOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMainMenuMobilAnchorEl(event.currentTarget);
  };

  const profileMenuId = 'primary-search-account-menu';
  const mobilTabsId = 'mainMenuIdMobileId';
  const mobileMenuId = 'primary-search-account-menu-mobile';

  return (
    <div className={styles.NavBarColor}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.sectionMobile}
            color="inherit"
            aria-label="open drawer"
            onClick={handleMainMenuMobielOpen}
          >
            <MenuIcon />
          </IconButton>
          
          <NavBarTabs/>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search service"
              classes={{
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

          <div className={classes.sectionDesktop}>
            <IconButton
              key="profileButton"
              edge="end"
              aria-label="account of current user"
              aria-controls={profileMenuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              key="showMoreIcon"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
            <MoreIcon />
            </IconButton>
          </div>          
        </Toolbar>
      </AppBar>
      <ProfileMobilMenu
        idElem={mobileMenuId}
        anchorElem={mobileMoreAnchorEl}
        closeHandler={()=> setMobileMoreAnchorEl(null)}
        displayMenuHandler={handleProfileMenuOpen}
        isOpen={Boolean(mobileMoreAnchorEl)}
      />
      <ProfileMenu 
        idElem={profileMenuId} 
        anchorElement={anchorEl} 
        isOpen={Boolean(anchorEl)} 
        handleClose={handleMenuClose}
      />
      <NavBarMobilTabs 
        idElem={mobilTabsId} 
        anchorElement={mainMenuMobilAnchorEl} 
        isOpen={Boolean(mainMenuMobilAnchorEl)} 
        onCloseHandler={()=> { setMainMenuMobilAnchorEl(null)}} 
      />
    </div>
  );
}
