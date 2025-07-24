import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { sspApi } from '../../helpers/http-clients';
import SweetAlert from '../../helpers/sweetAlert';

export const onUpdatePassword = createAsyncThunk(
    'password/onUpdatePassword',
    async ({form, navigate}, thunkAPI) => {
        try {
            const userId = localStorage.getItem("id")
            const token = localStorage.getItem("token")
    
            const res = await sspApi.post(`/user/${userId}/change-password`, form, {
                headers: {
                    "Content-Type": 'application/x-www-form-urlencoded',
                    Authorization: `Bearer ${token}`
                }
            })
            SweetAlert.successToast(res.data)
            navigate('/settings');
        } catch (err) {
            SweetAlert.errorAlert(err);
            return thunkAPI.rejectWithValue(err.response?.data?.message);
        }
    }
)

export const onForgotPassword = createAsyncThunk(
    'password/onForgotPassword',
    async ({email, navigate}, thunkAPI) => {
        try {
            const res = await sspApi.post(`/user/forgot-password`, {email}, {
                headers: {
                    "Content-Type": 'application/x-www-form-urlencoded',
                }
            })
            SweetAlert.successToast(res.data)
            navigate('/login');
        } catch (err) {
            SweetAlert.errorAlert(err);
            return thunkAPI.rejectWithValue(err.response?.data?.message);
        }
    }
)

export const onResetPassword = createAsyncThunk(
    'password/onResetPassword',
    async ({form, id, navigate}, thunkAPI) => {
        try {
            const res = await sspApi.post(`/user/${id}/reset-password`, form, {
                headers: {
                    "Content-Type": 'application/x-www-form-urlencoded',
                }
            })

            SweetAlert.successToast(res.data)
            navigate('/login');
        } catch(err) {
            SweetAlert.errorAlert(err);
            return thunkAPI.rejectWithValue(err.response?.data?.message);
        }
    }
)

const passwordSlice = createSlice({
    name: 'password',
    initialState: {
        loading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(onUpdatePassword.pending, (state)=> {
                state.loading =  true
            })
            .addCase(onUpdatePassword.fulfilled, (state)=> {
                state.loading =  false
            })
            .addCase(onUpdatePassword.rejected, (state)=> {
                state.loading =  false
            })
            .addCase(onForgotPassword.pending, (state)=> {
                state.loading =  true
            })
            .addCase(onForgotPassword.fulfilled, (state)=> {
                state.loading =  false
            })
            .addCase(onForgotPassword.rejected, (state)=> {
                state.loading =  false
            })
            .addCase(onResetPassword.pending, (state)=> {
                state.loading =  true
            })
            .addCase(onResetPassword.fulfilled, (state)=> {
                state.loading =  false
            })
            .addCase(onResetPassword.rejected, (state)=> {
                state.loading =  false
            })
    }
})

export default passwordSlice.reducer