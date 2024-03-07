// src/counterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthenticatedState {
  authenticated: boolean;
}

const initialState: AuthenticatedState = {
  authenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.authenticated = action.payload;
    },
  },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
