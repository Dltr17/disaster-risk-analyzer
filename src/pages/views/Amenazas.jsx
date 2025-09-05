import React, { useState } from 'react';
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
  Chip,
  OutlinedInput,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { addThreat, updateThreat, deleteThreat } from '../../store/slices/threatSlice';
import { formFields as threatFormFields, threatTypes } from '../../data/amenazaFormFields.js';

const Amenazas = () => {
  const dispatch = useDispatch();
  const { threats } = useSelector((state) => state.threat);
  const { vulnerabilities } = useSelector((state) => state.vulnerability);

  const [open, setOpen] = useState(false);
  const [currentThreat, setCurrentThreat] = useState(null);

  const { control, handleSubmit, reset, watch } = useForm();

  const handleClickOpen = (threat = null) => {
    setCurrentThreat(threat);
    reset(threat || { 
      nombre: '', 
      descripcion: '', 
      tipo: '', 
      ids_vulnerabilidades_asociadas: [] 
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentThreat(null);
    reset();
  };

  const onSubmit = (data) => {
    if (currentThreat) {
      dispatch(updateThreat({ ...data, id_amenaza: currentThreat.id_amenaza }));
    } else {
      dispatch(addThreat(data));
    }
    handleClose();
  };

  const handleDelete = (id) => {
    dispatch(deleteThreat({ id_amenaza: id }));
  };

  const renderFormField = (field) => {
    const { name, label, type, multiline, rows, options } = field;

    // Enhance the multiselect field with dynamic vulnerability options
    if (type === 'multiselect') {
      field.options = vulnerabilities.map(v => ({ value: v.id_vulnerabilidad, label: v.nombre }));
    }

    return (
      <Box key={name} sx={{ my: 2 }}>
        <Controller
          name={name}
          control={control}
          defaultValue={type === 'multiselect' ? [] : ''}
          render={({ field: controllerField }) => {
            switch (type) {
              case 'select':
                return (
                  <FormControl fullWidth>
                    <InputLabel>{label}</InputLabel>
                    <Select {...controllerField} label={label}>
                      {options.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                );
              case 'multiselect':
                return (
                  <FormControl fullWidth>
                    <InputLabel>{label}</InputLabel>
                    <Select
                      {...controllerField}
                      multiple
                      label={label}
                      input={<OutlinedInput label={label} />}
                      renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {selected.map((value) => {
                            const selectedVul = field.options.find(opt => opt.value === value);
                            return <Chip key={value} label={selectedVul?.label || value} />;
                          })}
                        </Box>
                      )}
                    >
                      {field.options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                );
              default:
                return (
                  <TextField
                    {...controllerField}
                    fullWidth
                    label={label}
                    multiline={multiline || false}
                    rows={rows || 1}
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
          Gestión de Amenazas
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleClickOpen()}
          sx={{ mb: 3 }}
        >
          Añadir Amenaza
        </Button>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Tipo</TableCell>
                <TableCell>Vulnerabilidades Asociadas</TableCell>
                <TableCell align="right">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {threats.map((threat) => (
                <TableRow key={threat.id_amenaza}>
                  <TableCell>{threat.nombre}</TableCell>
                  <TableCell>{threat.tipo}</TableCell>
                  <TableCell>
                    {threat.ids_vulnerabilidades_asociadas?.length || 0}
                  </TableCell>
                  <TableCell align="right">
                    <IconButton onClick={() => handleClickOpen(threat)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(threat.id_amenaza)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
          <DialogTitle>{currentThreat ? 'Editar Amenaza' : 'Añadir Nueva Amenaza'}</DialogTitle>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <DialogContent>
                {threatFormFields.map(renderFormField)}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancelar</Button>
              <Button type="submit" variant="contained">
                {currentThreat ? 'Actualizar' : 'Guardar'}
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </Paper>
    </Box>
  );
};

export default Amenazas;
