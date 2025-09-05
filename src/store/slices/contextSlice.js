import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  data: {
    id_empresa: '',
    nombre: '',
    sector: '',
    descripcion: '',
    nombre_contacto: '',
    cargo_contacto: '',
    email_contacto: '',
    telefono_contacto: '',
    direccion: '',
    ciudad: '',
    pais: '',
    fecha_creacion: '',
    fecha_ultimo_analisis: ''
  }
};

export const contextSlice = createSlice({
  name: 'context',
  initialState,
  reducers: {
    startLoadingContext: (state) => {
      state.isLoading = true;
    },
    setContextData: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    updateContextField: (state, action) => {
      const { field, value } = action.payload;
      state.data[field] = value;
    },
    setContextError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    clearContext: (state) => {
        state.data = initialState.data;
        state.isLoading = false;
        state.error = null;
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  startLoadingContext,
  setContextData,
  updateContextField,
  setContextError,
  clearContext
} = contextSlice.actions;

export default contextSlice.reducer;
