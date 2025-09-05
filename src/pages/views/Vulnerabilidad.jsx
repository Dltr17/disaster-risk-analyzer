import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import {
  Box,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Slider,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  addVulnerability,
  updateVulnerability,
  deleteVulnerability,
} from '../../store/slices/vulnerabilitySlice';
import { formFields, vulnerabilityTypes } from '../../data/vulnerabilidadFormFields.js';

const Vulnerabilidad = () => {
  const dispatch = useDispatch();
  const { vulnerabilities } = useSelector((state) => state.vulnerability);
  const [open, setOpen] = useState(false);
  const [currentVulnerability, setCurrentVulnerability] = useState(null);

  const { control, handleSubmit, reset } = useForm();

  const handleClickOpen = (vulnerability = null) => {
    setCurrentVulnerability(vulnerability);
    // Reset form with vulnerability data or default values
    reset(vulnerability || { nombre: '', descripcion: '', tipo: '', calificacion: 1 });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentVulnerability(null);
    reset(); // Clear the form on close
  };

  const onSubmit = (data) => {
    if (currentVulnerability) {
      dispatch(
        updateVulnerability({
          ...data,
          id_vulnerabilidad: currentVulnerability.id_vulnerabilidad,
        })
      );
    } else {
      dispatch(addVulnerability(data));
    }
    handleClose();
  };

  const handleDelete = (id) => {
    dispatch(deleteVulnerability({ id_vulnerabilidad: id }));
  };
  
  // Dynamically renders the correct form field based on its type
  const renderFormField = (field) => {
    return (
      <Box key={field.name} sx={{ mb: 2 }}>
        <Controller
          name={field.name}
          control={control}
          defaultValue={field.defaultValue || (field.type === 'select' ? '' : undefined)}
          render={({ field: controllerField }) => {
            switch (field.type) {
              case 'select':
                return (
                  <FormControl fullWidth>
                    <InputLabel>{field.label}</InputLabel>
                    <Select {...controllerField} label={field.label}>
                      {field.options.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                );
              case 'slider':
                return (
                  <>
                    <Typography gutterBottom>{field.label}</Typography>
                    <Slider
                      {...controllerField}
                      aria-labelledby="input-slider"
                      valueLabelDisplay="auto"
                      step={field.step}
                      marks
                      min={field.min}
                      max={field.max}
                    />
                  </>
                );
              default: // 'text' or 'textarea'
                return (
                  <TextField
                    {...controllerField}
                    fullWidth
                    label={field.label}
                    multiline={field.multiline || false}
                    rows={field.rows || 1}
                    variant="outlined"
                  />
                );
            }
          }}
        />
      </Box>
    );
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
          Gestión de Vulnerabilidades
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleClickOpen()}
          sx={{ mb: 3 }}
        >
          Añadir Vulnerabilidad
        </Button>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Tipo</TableCell>
                <TableCell>Calificación</TableCell>
                <TableCell align="right">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vulnerabilities.map((vul) => (
                <TableRow key={vul.id_vulnerabilidad}>
                  <TableCell>{vul.nombre}</TableCell>
                  <TableCell>{vul.tipo}</TableCell>
                  <TableCell>{vul.calificacion}</TableCell>
                  <TableCell align="right">
                    <IconButton onClick={() => handleClickOpen(vul)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(vul.id_vulnerabilidad)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
          <DialogTitle>
            {currentVulnerability ? 'Editar Vulnerabilidad' : 'Añadir Vulnerabilidad'}
          </DialogTitle>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <DialogContent>
                {formFields.map(renderFormField)}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} type="button">Cancelar</Button>
              <Button type="submit" variant="contained">
                {currentVulnerability ? 'Actualizar' : 'Guardar'}
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </Paper>
    </Box>
  );
};

export default Vulnerabilidad;
