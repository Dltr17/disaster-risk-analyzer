import { Box, Paper, Typography } from '@mui/material';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';

const Reporte = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
        Generación de Reportes
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
        <AssessmentOutlinedIcon sx={{ fontSize: 80, color: '#bdbdbd', mb: 2 }} />
        <Typography variant="h6" component="p" sx={{ color: '#757575' }}>
          Aquí podrás generar y visualizar los reportes de seguridad.
        </Typography>
        <Typography variant="body1" sx={{ color: '#9e9e9e', mt: 1 }}>
          Próximamente, podrás exportar tus análisis en formatos PDF y CSV.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Reporte;
