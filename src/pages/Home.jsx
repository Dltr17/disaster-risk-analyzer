import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import SecurityIcon from '@mui/icons-material/Security';

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        background: 'linear-gradient(45deg, #1e3c72 30%, #2a5298 90%)',
        color: 'white',
        p: 3,
      }}
    >
      <Container maxWidth="md">
        <SecurityIcon sx={{ fontSize: 120, mb: 2, color: '#64b5f6' }} />
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
        >
          Vulnerability Assessment Tool
        </Typography>
        <Typography
          variant="h5"
          component="p"
          gutterBottom
          sx={{ mb: 4, fontStyle: 'italic', color: '#e0e0e0' }}
        >
          Identifica, analiza y reporta vulnerabilidades con una interfaz moderna y eficiente.
        </Typography>
        <Button
          variant="contained"
          size="large"
          color="primary"
          component={Link}
          to="/work"
          sx={{
            padding: '15px 30px',
            fontSize: '1.2rem',
            boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease 0s',
            '&:hover': {
              transform: 'translateY(-3px)',
              boxShadow: '0px 15px 20px rgba(46, 105, 229, 0.4)',
            },
          }}
        >
          Comenzar
        </Button>
      </Container>
    </Box>
  );
};

export default Home;
