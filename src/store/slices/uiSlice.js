import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSideNavOpen: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openSideNav: (state) => {
      state.isSideNavOpen = true;
    },
    closeSideNav: (state) => {
      state.isSideNavOpen = false;
    },
    toggleSideNav: (state) => {
        state.isSideNavOpen = !state.isSideNavOpen;
    }
  },
});

export const { openSideNav, closeSideNav, toggleSideNav } = uiSlice.actions;

export default uiSlice.reducer;
