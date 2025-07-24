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
    }
})

export default passwordSlice.reducer