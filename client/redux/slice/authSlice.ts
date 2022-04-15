/* eslint-disable no-return-await */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthState, ILogin, IRegister } from '../../interface/authTypes';
import { facebook, forgotPassword, google, login, register } from '../services/authServices';

export const authRegister = createAsyncThunk(
  'auth/register',
  async (user: IRegister) => await register(user)
);

export const authLogin = createAsyncThunk('auth/login', async (user: ILogin) => await login(user));

export const authGoogleLogin = createAsyncThunk('auth/google', async () => await google());

export const authFacebookLogin = createAsyncThunk('auth/facebook', async () => await facebook());

export const authForgotPassword = createAsyncThunk(
  'auth/forgot-password',
  async (email: string) => await forgotPassword(email)
);

const initialState: AuthState = {
  currentUser: undefined,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        ({ type }) => type.startsWith('auth') && type.endsWith('/pending'),
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        ({ type }) => type.startsWith('auth') && type.endsWith('/fulfilled'),
        (state) => {
          state.loading = false;
        }
      );
  },
});

export const { addUser } = authSlice.actions;

export default authSlice.reducer;
