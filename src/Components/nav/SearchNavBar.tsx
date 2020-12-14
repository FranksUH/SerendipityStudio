import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import styles from './NavBar.module.css';
import { NavBarTabs } from './NavBarTabs';
import useStyles from './DynamicStyles';
import { EmojiFoodBeverageOutlined } from '@material-ui/icons';
import ServicesIcon from '@material-ui/icons/Apps';
import ApplicationIcon from '@material-ui/icons/CalendarToday';
import { NavLink } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';

export default function SearchNavBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);
  const [mainMenuMobilAnchorEl, setMainMenuMobilAnchorEl] = useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

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

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}> <SettingsIcon style={{marginRight: '8px'}}/> Manage Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}> <ExitToAppIcon style={{marginRight: '8px'}}/> Log out</MenuItem>
    </Menu>
  );

  const mainMenuIdMobileId = 'mainMenuIdMobileId';
  const renderMainMenuMobile = (
    <Menu
      anchorEl={mainMenuMobilAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mainMenuIdMobileId}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={mainMenuMobilAnchorEl !== null}
      onClose={()=> setMainMenuMobilAnchorEl(null)}
    >
      <NavLink to='/' style={{color:'inherit', textDecoration:'none' }}> 
        <MenuItem onClick={()=>setMainMenuMobilAnchorEl(null)}>
          <IconButton aria-label="Serendipity Ico" color="inherit">
            <Badge badgeContent={0} color="secondary">
              <EmojiFoodBeverageOutlined/>
            </Badge>
          </IconButton>
          <p>Serendipity Studio</p>
        </MenuItem>
      </NavLink>
      <NavLink to='/grid' style={{color:'inherit', textDecoration:'none' }}> 
      <MenuItem onClick={()=>setMainMenuMobilAnchorEl(null)}>
        <IconButton aria-label="Services Ico" color="inherit">
          <Badge badgeContent={0} color="secondary">
            <ServicesIcon />
          </Badge>
        </IconButton>
        <p>Services</p>
      </MenuItem>
      </NavLink>
      <NavLink to='/booking' style={{color:'inherit', textDecoration:'none' }}> 
      <MenuItem onClick={()=>setMainMenuMobilAnchorEl(null)}>
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

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={()=> setMobileMoreAnchorEl(null)}
    >
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={0} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
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
  );

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
          {/* <Typography className={classes.sectionMobile} variant="h6" noWrap>
            Serendipity Studio
          </Typography> */}
          <NavBarTabs/>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={0} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
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
      {renderMobileMenu}
      {renderMenu}
      {renderMainMenuMobile}
    </div>
  );
}
