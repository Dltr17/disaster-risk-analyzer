import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Typography,
  Grid,
  Stack,
  Divider,
} from '@mui/material';
import { setVulnerabilityScore, resetScores } from '../../store/slices/vulnerabilitySlice';
import { getSummary } from '../../helpers/vulnerabilityCalculators';
import { vulnerabilityMatrix } from '../../data/vulnerabilidadFormFields';

// Import the newly created components
import VulnerabilitySummary from '../../components/vulnerability/VulnerabilitySummary';
import VulnerabilityChecklist from '../../components/vulnerability/VulnerabilityChecklist';

const Vulnerabilidad = () => {
  const dispatch = useDispatch();

  // Safely select scores, defaulting to an empty object if the state is not ready.
  const scores = useSelector((state) => state.vulnerability?.scores) || {};

  const handleScoreChange = (id, score) => {
    dispatch(setVulnerabilityScore({ id, score }));
  };

  const handleReset = () => {
    // In a real app, you might want a confirmation dialog here.
    dispatch(resetScores());
  };

  // useMemo will recalculate the summary only when the scores object changes.
  const summary = useMemo(
    () => getSummary(vulnerabilityMatrix, scores),
    [scores]
  );

  return (
      <Box sx={{ px: { xs: 2, md: 3 }, pt: { xs: 2, md: 3 } }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ mb: 3, fontWeight: 'bold', color: '#1A2027' }}
        >
          Análisis de Vulnerabilidad
        </Typography>

      <Stack 
      spacing={2}
      divider={<Divider orientation="horizontal" flexItem />}
      direction="column"
      >
        
       <VulnerabilitySummary summary={summary} onReset={handleReset} />

       <VulnerabilityChecklist
          scores={scores}
          onScoreChange={handleScoreChange}
        />
      </Stack>
      </Box>
  );
};

export default Vulnerabilidad;
