import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sspApi } from "../../helpers/http-clients";

export const onGetAllTripReviews = createAsyncThunk(
    'tripReviews/ongetAllTripReviews',
    async (OpenTripId ,thunkAPI) => {
        try {
            const userId = localStorage.getItem("id")
            const token = localStorage.getItem("token")
            const res = await sspApi.get(`/tripreview/${userId}/${OpenTripId}/get-all-tripreviews`, {
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

const tripReviewSlice = createSlice({
    name:'tripReviews',
    initialState: {
        tripReviews: {},
        loading: true,
    },
    reducers: {
        clearTripReviews: (state) => {
            state.tripReviews = null;
            state.loading = true
        }
    },
    extraReducers: (builder) => {
        builder 
            .addCase(onGetAllTripReviews.pending, (state) => {
                state.loading = true;
            })
            .addCase(onGetAllTripReviews.fulfilled, (state, action) => {
                state.loading = false;
                state.tripReviews = action.payload
            })
            .addCase(onGetAllTripReviews.rejected, (state) => {
                state.loading = false;
            })
    }
})

export default tripReviewSlice.reducer
export const { clearTripReviews } = tripReviewSlice.actions;
