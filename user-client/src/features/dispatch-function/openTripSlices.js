import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sspApi } from "../../helpers/http-clients";

export const onGetAllOpenTrips = createAsyncThunk(
    'openTrip/ongetAllOpenTrips',
    async (thunkAPI) => {
        try {
            const userId = localStorage.getItem("id")
            const token = localStorage.getItem("token")
            const res = await sspApi.get(`/opentrip/${userId}`, {
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
export const onGetOpenTrip = createAsyncThunk(
    'openTrip/onGetOpenTrip',
    async (tripId,thunkAPI) => {
        try {
            const userId = localStorage.getItem("id")
            const token = localStorage.getItem("token")
            const res = await sspApi.get(`/opentrip/${userId}/${tripId}`, {
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


const openTripSlice = createSlice({
    name:'openTrip',
    initialState: {
        openTrips: {},
        openTrip:{},
        loading: true,
    },
    reducers: {
        clearOpenTrips: (state) => {
            state.openTrips = null;
            state.loading = true
        }
    },
    extraReducers: (builder) => {
        builder 
            .addCase(onGetAllOpenTrips.pending, (state) => {
                state.loading = true;
            })
            .addCase(onGetAllOpenTrips.fulfilled, (state, action) => {
                state.loading = false;
                state.openTrips = action.payload
            })
            .addCase(onGetAllOpenTrips.rejected, (state) => {
                state.loading = false;
            })
            .addCase(onGetOpenTrip.pending, (state) => {
                state.loading = true;
            })
            .addCase(onGetOpenTrip.fulfilled, (state, action) => {
                state.loading = false;
                state.openTrip = action.payload
            })
            .addCase(onGetOpenTrip.rejected, (state) => {
                state.loading = false;
            })
    }
})

export default openTripSlice.reducer
export const { clearOpenTrips } = openTripSlice.actions;
