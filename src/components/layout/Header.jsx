import { AppBar, Toolbar, IconButton, Typography, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { toggleSideNav } from '../../store/slices/uiSlice';

const drawerWidth = 240;

const CustomAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Header = () => {
  const dispatch = useDispatch();
  const { isSideNavOpen } = useSelector((state) => state.ui);

  const handleDrawerToggle = () => {
    dispatch(toggleSideNav());
  };

  return (
    <CustomAppBar position="fixed" open={isSideNavOpen}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          edge="start"
          sx={{
            marginRight: 5,
            ...(isSideNavOpen && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>

        <NavLink
          to="/"
          style={{
            textDecoration: 'none',
            color: 'inherit',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <ShieldOutlinedIcon sx={{ mr: 1.5, fontSize: '2rem' }} />
          <Typography variant="h6" noWrap>
            Risk Analyzer
          </Typography>
        </NavLink>
      </Toolbar>
    </CustomAppBar>
  );
};

export default Header;
