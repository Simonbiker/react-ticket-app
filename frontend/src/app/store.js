import { configureStore } from '@reduxjs/toolkit';
import authRuducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
   auth: authRuducer,
  },
});
