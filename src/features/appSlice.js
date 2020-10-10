import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    app: null,
  },
  reducers: {
    login: (state, action) => {
      state.app += action.payload;
    },
    logout: (state) => {
      state.app = null;
    }
  },
});

export const { login, logout } = appSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.app.value;

export default appSlice.reducer;
