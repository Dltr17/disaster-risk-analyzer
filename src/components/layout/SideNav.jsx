import React from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, IconButton, Tooltip, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import ShieldIcon from '@mui/icons-material/Shield';
import WarningIcon from '@mui/icons-material/Warning';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import { closeSideNav, openSideNav } from '../../store/slices/uiSlice';

const drawerWidth = 240;

const menuItems = [
  { text: 'Vulnerabilidad', to: '/work/vulnerabilidad', icon: <ShieldIcon /> },
  { text: 'Amenazas', to: '/work/amenazas', icon: <WarningIcon /> },
  { text: 'Reporte', to: '/work/reporte', icon: <AssessmentIcon /> },
];

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const SideNav = () => {
  const { isSideNavOpen } = useSelector(state => state.ui);
  const dispatch = useDispatch();

  const handleDrawerClose = () => {
    dispatch(closeSideNav());
  };

  const handleDrawerOpen = () => {
    dispatch(openSideNav());
  };

  return (
    <Drawer variant="permanent" open={isSideNavOpen}>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
            </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{ flexGrow: 1 }}>
            {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
                <Tooltip title={item.text} placement="right" arrow disableHoverListener={isSideNavOpen}>
                    <ListItemButton
                        component={Link}
                        to={item.to}
                        onClick={!isSideNavOpen ? handleDrawerOpen : undefined}
                        sx={{
                            minHeight: 48,
                            justifyContent: isSideNavOpen ? 'initial' : 'center',
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                            minWidth: 0,
                            mr: isSideNavOpen ? 3 : 'auto',
                            justifyContent: 'center',
                            }}
                        >
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.text} sx={{ opacity: isSideNavOpen ? 1 : 0 }} />
                    </ListItemButton>
                </Tooltip>
            </ListItem>
            ))}
        </List>
        <Divider />
        <Footer />
      </Box>
    </Drawer>
  );
};

export default SideNav;
