import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sspApi } from "../../helpers/http-clients";
import SweetAlert from "../../helpers/sweetAlert";

export const onEditProfile = createAsyncThunk(
    'profile/onEditProfile',
    async ({form, navigate}, thunkAPI) => {
        try {
            const userId = localStorage.getItem("id")
            const token = localStorage.getItem("token")
            const res = await sspApi.post(`/profile/${userId}/edit-profile`, form, {
                headers: {
                    "Content-Type": 'application/x-www-form-urlencoded',
                    Authorization: `Bearer ${token}`
                }
            })
            SweetAlert.successToast(res.data)
            navigate('/edit-profile')
        } catch (err) {
            SweetAlert.errorAlert(err);
            return thunkAPI.rejectWithValue(err.response?.data?.message);
        }
    }
)

const profileSlice = createSlice({
    name:'user',
    initialState: {
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder 
            .addCase(onEditProfile.pending, (state) => {
                state.loading = true;
            })
            .addCase(onEditProfile.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(onEditProfile.rejected, (state) => {
                state.loading = false;
            })
    }
})

export default profileSlice.reducer