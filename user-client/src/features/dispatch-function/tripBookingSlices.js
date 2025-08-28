import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sspApi } from "../../helpers/http-clients";

export const onGetAllTripBookings = createAsyncThunk(
    'tripBookings/ongetAllTripBookings',
    async (thunkAPI) => {
        try {
            const userId = localStorage.getItem("id")
            const token = localStorage.getItem("token")
            const res = await sspApi.get(`/tripbooking/${userId}/get-my-tripbookings`, {
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

export const onCreateTripBooking = createAsyncThunk(
    'tripBookings/onCreateTripBooking',
    async ({OpenTripId, TripDateId}, thunkAPI) => {
        try {
            const UserId = localStorage.getItem("id")
            const token = localStorage.getItem("token")
            const res = await sspApi.post(
                `/tripbooking/${UserId}/${OpenTripId}/${TripDateId}/create-tripbooking`,
                {}, // <-- empty body
                {
                    headers: {
                        "Content-Type": 'application/x-www-form-urlencoded',
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            return res.data
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response?.data?.message);
        }
    }
)

const tripBookingSlice = createSlice({
    name:'tripBookings',
    initialState: {
        tripBookings: {},
        loading: true,
    },
    reducers: {
        clearTripBookings: (state) => {
            state.tripBookings = null;
            state.loading = true
        }
    },
    extraReducers: (builder) => {
        builder 
            .addCase(onGetAllTripBookings.pending, (state) => {
                state.loading = true;
            })
            .addCase(onGetAllTripBookings.fulfilled, (state, action) => {
                state.loading = false;
                state.tripBookings = action.payload
            })
            .addCase(onGetAllTripBookings.rejected, (state) => {
                state.loading = false;
            })
            .addCase(onCreateTripBooking.pending, (state) => {
                state.loading = true;
            })
            .addCase(onCreateTripBooking.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(onCreateTripBooking.rejected, (state) => {
                state.loading = false;
            })
    }
})

export default tripBookingSlice.reducer
export const { clearTripBookings } = tripBookingSlice.actions;
