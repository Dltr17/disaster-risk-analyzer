import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Work from '../pages/Work';
import Layout from '../components/layout/Layout';
import Vulnerabilidad from '../pages/views/Vulnerabilidad';
import Amenazas from '../pages/views/Amenazas';
import Reporte from '../pages/views/Reporte';
import Contexto from '../pages/views/Contexto';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route 
        path="/work" 
        element={<Layout><Work /></Layout>}
      >
        <Route index element={<Vulnerabilidad />} />
        <Route path="vulnerabilidad" element={<Vulnerabilidad />} />
        <Route path="amenazas" element={<Amenazas />} />
        <Route path="reporte" element={<Reporte />} />
        <Route path="contexto" element={<Contexto />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;
