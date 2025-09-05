import { Routes, Route } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Appbar from './components/layout/Appbar';
import Home from './pages/Home';
import Contexto from './pages/Contexto';
import Vulnerabilidades from './pages/Vulnerabilidades';
import Amenazas from './pages/Amenazas';

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Appbar />
      {/* Removed global padding `p: 3` to allow for full-width components */}
      <Box component="main" sx={{ flexGrow: 1, mt: 8 }}>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contexto" element={<Contexto />} />
            <Route path="/vulnerabilidades" element={<Vulnerabilidades />} />
            <Route path="/amenazas" element={<Amenazas />} />
          </Routes>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
