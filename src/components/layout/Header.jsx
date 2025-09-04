import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { toggleSideNav } from '../../store/slices/uiSlice';

const Header = () => {
  const dispatch = useDispatch();

  const handleDrawerToggle = () => {
    dispatch(toggleSideNav());
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
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
    </AppBar>
  );
};

export default Header;
