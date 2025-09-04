import { Box, Paper, Typography } from '@mui/material';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';

const Vulnerabilidad = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
        Gestión de Vulnerabilidades
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
          backgroundColor: '#f5f5f5', // Un fondo ligeramente gris para el papel
          textAlign: 'center',
        }}
      >
        <PlaylistAddCheckIcon sx={{ fontSize: 80, color: '#bdbdbd', mb: 2 }} />
        <Typography variant="h6" component="p" sx={{ color: '#757575' }}>
          Aquí se mostrará y gestionará la lista de vulnerabilidades.
        </Typography>
        <Typography variant="body1" sx={{ color: '#9e9e9e', mt: 1 }}>
          Próximamente, podrás añadir, editar y analizar las vulnerabilidades detectadas.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Vulnerabilidad;
