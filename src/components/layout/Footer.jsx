import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ p: 2 }}>
      <Typography variant="body2" color="text.secondary" align="center">
        © 2024 Diego.Lotero
      </Typography>
    </Box>
  );
};

export default Footer;
