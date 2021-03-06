import { Avatar, Badge, Box, Button, Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme
} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import MenuIcon from '@material-ui/icons/Menu';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import clsx from 'clsx';
import React, { Suspense, useContext } from 'react';
import { useNavigate } from 'react-router';
import TakeMyFarmLogo from '../../assets/take_my_farm.png';
import { useAuthContext } from '../../context/AuthContext';
import { CartContext } from '../../context/CartContext';
import { useScreenSize } from '../../hooks/useScreenSize';

const drawerWidth = 300;

// const StyledBadge = withStyles((theme: Theme) =>
//   createStyles({
//     badge: {
//       right: -3,
//       top: 13,
//       border: `2px solid ${theme.palette.background.paper}`,
//       padding: '0 4px',
//       backgroundColor: '#276552',
//     },
//   })
// )(Badge);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
      marginLeft: 0,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      overflowX: 'hidden',
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      // [theme.breakpoints.up('sm')]: {
      //     width: theme.spacing(9) + 1,
      // },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      height: '100px',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    logo: {
      padding: '20 !important',
      '&:hover': {
        backgroundColor: 'white',
        cursor: 'pointer',
        textDecoration: 'none',
      },
    },
  })
);

export function Header() {
  const navigate = useNavigate();
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useScreenSize(600);
  const { auth, handleLogout } = useAuthContext();
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleNavigation = (
    location: string,
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    navigate(location);
    setSelectedIndex(index);
    // setSubSelectedIndex(0);
    handleDrawerClose();
  };

  const { cart } = useContext(CartContext);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar
          style={{
            paddingLeft: '16px',
            paddingBottom: '10px',
            paddingTop: '10px',
            borderBottom: '5px solid #276552',
            backgroundColor: 'white',
          }}
        >
          {/*{auth.authenticated ? (*/}
          <IconButton
            color="primary"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          {/* ) : null} */}

          <IconButton
            onClick={() => {
              navigate('/');
            }}
            className={classes.logo}
          >
            <img
              style={{ width: '150px' }}
              src={
                TakeMyFarmLogo
              }
              alt="Take my farm"
            />
          </IconButton>
          <Box display="flex" justifyContent="flex-end" width="100%">
            {auth.authenticated ? (
              <Box>
                {isDesktop ? (
                  <Box display="flex" alignItems="center">
                    <Typography style={{ color: 'black' }}>
                      Hi, {auth.user.name}
                    </Typography>
                    <Button
                      color="primary"
                      style={{ marginLeft: '10px' }}
                      onClick={() => {
                        handleLogout();
                        navigate('/login');
                      }}
                    >
                      Sign Out
                    </Button>
                  </Box>
                ) : (
                  <Box display="flex" alignItems="center">
                    <IconButton
                      style={{ color: 'black' }}
                      aria-label="Sign Out"
                      onClick={() => {
                        handleLogout();
                        navigate('/login');
                      }}
                    >
                      <MeetingRoomIcon style={{ fontSize: '28px' }} />
                    </IconButton>
                  </Box>
                )}
              </Box>
            ) : (
              <Box>
                {isDesktop ? (
                  <Box>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        navigate('/register');
                      }}
                    >
                      Sign Up
                    </Button>
                    <Button
                      style={{ marginLeft: '5px' }}
                      color="secondary"
                      onClick={() => {
                        navigate('/login');
                      }}
                    >
                      Sign In
                    </Button>
                  </Box>
                ) : (
                  <Box>
                    <IconButton
                      style={{ color: 'white' }}
                      aria-label="Sign In"
                      onClick={() => {
                        navigate('/register');
                      }}
                    >
                      <PersonAddIcon style={{ fontSize: '28px' }} />
                    </IconButton>
                    <IconButton
                      style={{ color: 'white', marginLeft: '10px' }}
                      aria-label="Sign Up"
                      onClick={() => {
                        navigate('/login');
                      }}
                    >
                      <ExitToAppIcon style={{ fontSize: '28px' }} />
                    </IconButton>
                  </Box>
                )}
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        anchor="left"
        variant={
          auth.authenticated
            ? isDesktop
              ? 'permanent'
              : 'temporary'
            : 'temporary'
        }
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />

        {auth.authenticated ? (
          <List style={{ height: '100%', marginTop: '10px' }}>
            <ListItem
              selected={selectedIndex === 2}
              button
              onClick={(event) => {
                handleNavigation('/cart', event, 2);
              }}
            >
              <ListItemIcon>
                <IconButton aria-label="Cart">
                  {cart.items.length > 0 ? (
                    <Badge badgeContent={cart.items.length} color="secondary">
                      <ShoppingCartIcon />
                    </Badge>
                  ) : (
                    <ShoppingCartIcon />
                  )}
                </IconButton>
              </ListItemIcon>
              <ListItemText primary="Cart" />
            </ListItem>

            <ListItem
              selected={selectedIndex === 3}
              button
              onClick={(event) => {
                handleNavigation('/wishlist', event, 3);
              }}
            >
              <ListItemIcon>
                <IconButton aria-label="Wishlist">
                  <FavoriteIcon />
                </IconButton>
              </ListItemIcon>
              <ListItemText primary="Wishlist" />
            </ListItem>
          </List>
        ) : null}

        {auth.authenticated ? (
          <List style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <ListItem
              style={{ paddingRight: '48px' }}
              selected={selectedIndex === 6}
              button
              onClick={(event) => {
                handleNavigation('/profile', event, 6);
              }}
            >
              <ListItemIcon>
                <Suspense fallback="Loading..">
                  <Box>
                    <Avatar
                      src={auth.user.profileImageUri || ''}
                      alt={auth.user.profileImageUri || ''}
                    />
                  </Box>
                </Suspense>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
          </List>
        ) : (
          ''
        )}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
}
