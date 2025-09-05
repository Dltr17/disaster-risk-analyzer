import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { Box, TextField, Button, Typography, Grid, Paper } from '@mui/material';
import { generateUUID } from '../../helpers/uuidGenerator';
import {
  setContextData,
  clearContext,
} from '../../store/slices/contextSlice';
import { formFields } from '../../data/contextoFormFields'; // Import the form configuration

const Contexto = () => {
  const dispatch = useDispatch();
  const { data: contextData } = useSelector((state) => state.context);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: contextData,
  });

  useEffect(() => {
    reset(contextData);
  }, [contextData, reset]);

  const onSubmit = (data) => {
    const dataToSave = {
      ...data,
      id_empresa: contextData.id_empresa || generateUUID(),
      fecha_creacion:
        contextData.fecha_creacion || new Date().toISOString().split('T')[0],
      fecha_ultimo_analisis: new Date().toISOString(),
    };
    dispatch(setContextData(dataToSave));
  };

  const handleClear = () => {
    dispatch(clearContext());
  };

  const isExistingContext = contextData && contextData.id_empresa;

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
          Caracterización del Contexto
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Grid container spacing={2}>
            {formFields.map((field) => (
              <Grid item key={field.name} size={field.gridProps}>
                <TextField
                  fullWidth
                  label={field.label}
                  type={field.type || 'text'}
                  multiline={field.multiline || false}
                  rows={field.rows || 1}
                  {...register(field.name)}
                />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleClear}
              type="button"
            >
              Limpiar Formulario
            </Button>
            <Button variant="contained" color="primary" type="submit">
              {isExistingContext ? 'Actualizar Contexto' : 'Guardar Contexto'}
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default Contexto;