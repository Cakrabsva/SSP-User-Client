import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sspApi } from "../../helpers/http-clients";

export const onGetAllTripDates = createAsyncThunk(
    'tripDates/onGetAllTripDates',
    async (OpenTripId ,thunkAPI) => {
        try {
            const userId = localStorage.getItem("id")
            const token = localStorage.getItem("token")
            const res = await sspApi.get(`/tripdate/${userId}/${OpenTripId}/get-all-tripDates`, {
                headers: {
                    "Content-Type": 'application/x-www-form-urlencoded',
                    Authorization: `Bearer ${token}`
                }
            })
            return res.data
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response?.data?.message);
        }
    }
)

const tripDateSlice = createSlice({
    name:'tripDates',
    initialState: {
        tripDates: {},
        loading: true,
    },
    reducers: {
        clearTripDates: (state) => {
            state.tripDates = null;
            state.loading = true
        }
    },
    extraReducers: (builder) => {
        builder 
            .addCase(onGetAllTripDates.pending, (state) => {
                state.loading = true;
            })
            .addCase(onGetAllTripDates.fulfilled, (state, action) => {
                state.loading = false;
                state.tripDates = action.payload
            })
            .addCase(onGetAllTripDates.rejected, (state) => {
                state.loading = false;
            })
    }
})

export default tripDateSlice.reducer
export const { clearTripDates} = tripDateSlice.actions;
