import { Box, Paper, Typography } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const Amenazas = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
        Análisis de Amenazas
      </Typography>
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          marginTop: 3,
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f5f5f5',
          textAlign: 'center',
        }}
      >
        <WarningAmberIcon sx={{ fontSize: 80, color: '#bdbdbd', mb: 2 }} />
        <Typography variant="h6" component="p" sx={{ color: '#757575' }}>
          Aquí se mostrará el análisis de amenazas potenciales.
        </Typography>
        <Typography variant="body1" sx={{ color: '#9e9e9e', mt: 1 }}>
          Próximamente, podrás visualizar y evaluar las amenazas relacionadas.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Amenazas;
