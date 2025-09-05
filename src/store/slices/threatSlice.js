import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  threats: [],
};

const threatSlice = createSlice({
  name: 'threat',
  initialState,
  reducers: {
    addThreat: {
      reducer: (state, action) => {
        state.threats.push(action.payload);
      },
      prepare: (threatData) => {
        return {
          payload: {
            ...threatData,
            id_amenaza: nanoid(),
            fecha_creacion: new Date().toISOString(),
          },
        };
      },
    },
    updateThreat: (state, action) => {
      const index = state.threats.findIndex(
        (threat) => threat.id_amenaza === action.payload.id_amenaza
      );
      if (index !== -1) {
        state.threats[index] = action.payload;
      }
    },
    deleteThreat: (state, action) => {
      state.threats = state.threats.filter(
        (threat) => threat.id_amenaza !== action.payload.id_amenaza
      );
    },
  },
});

export const { addThreat, updateThreat, deleteThreat } = threatSlice.actions;

export default threatSlice.reducer;
