// redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { sspApi } from '../../helpers/http-clients';
import Swal from 'sweetalert2';
import SweetAlert from '../../helpers/sweetAlert';

export const onLogin = createAsyncThunk(
  'auth/onLogin',
  async ({ form, navigate }, thunkAPI) => {
    try {
      const res = await sspApi.post('/user/login', form, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });

      const { token, id, first_name } = res.data;
      localStorage.setItem('token', token);
      localStorage.setItem('id', id);
      localStorage.setItem('first_name', first_name);

      SweetAlert.successToast(res.data)
      navigate('/');
      return res.data;
    } catch (err) {
      SweetAlert.errorAlert(err);
      return thunkAPI.rejectWithValue(err.response?.data?.message);
    }
  }
);

export const onRegister = createAsyncThunk(
  'auth/onRegister',
  async ({ form, navigate }, thunkAPI) => {
    try {
      const res = await sspApi.post('/user/register', form, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });

      SweetAlert.successToast(res.data)
      navigate('/login');
      return res.data;
    } catch (err) {
      Swal.fire({ icon: 'error', title: 'Oops...', text: err.response?.data?.message });
      return thunkAPI.rejectWithValue(err.response?.data?.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(onLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(onLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(onLogin.rejected, (state) => {
        state.loading = false;
      })
      .addCase(onRegister.pending, (state) => {
        state.loading = true;
      })
      .addCase(onRegister.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(onRegister.rejected, (state) => {
        state.loading = false;
      });
  }
});

export default authSlice.reducer;
