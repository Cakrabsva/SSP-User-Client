import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sspApi } from "../../helpers/http-clients";
import SweetAlert from "../../helpers/sweetAlert";

export const onUpdateEmail = createAsyncThunk (
    'user/onUpdateEmail',
    async ({form, navigate}, thunkAPI) => {
        try {
            const userId = localStorage.getItem("id")
            const token = localStorage.getItem('token')
            const res = await sspApi.post(`/user/${userId}/change-email`, form, {
                headers: {
                    "Content-Type": 'application/x-www-form-urlencoded',
                    Authorization: `Bearer ${token}`
                }
            })
            SweetAlert.successToast(res.data)
            navigate('/settings')
        } catch (err) {
            SweetAlert.errorAlert(err);
            return thunkAPI.rejectWithValue(err.response?.data?.message);
        }
    }
)

const userSlice = createSlice({
    name:'user',
    initialState: {
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder 
            .addCase(onUpdateEmail.pending, (state) => {
                state.loading = true;
            })
            .addCase(onUpdateEmail.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(onUpdateEmail.rejected, (state) => {
                state.loading = false;
            })
    }
})

export default userSlice.reducer