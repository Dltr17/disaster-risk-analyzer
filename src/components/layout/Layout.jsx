import { Box, styled } from '@mui/material';
import Header from './Header';
import SideNav from './SideNav';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSideNav } from '../../store/slices/uiSlice';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Layout = ({ children }) => {
  const { isSideNavOpen } = useSelector(state => state.ui);
  const dispatch = useDispatch();

  const handleSideNavToggle = () => {
    dispatch(toggleSideNav());
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Header open={isSideNavOpen} onSideNavToggle={handleSideNavToggle} />
      <SideNav />
      <Box component="main" sx={{ flexGrow: 1, px: 3, pt: 3, pb: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
