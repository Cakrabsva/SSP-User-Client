import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sspApi } from "../../helpers/http-clients";

const globalDataSlice = createSlice ({
    name: "global-data",
    initialState: {
        user: {},
        isLoading:true,
        error: null
    },
    reducers: {
        // setUser: (state, action) => {
        //     state.user = action.payload
        // },
        // setProfile: (state, action) => {
        //     state.profile = action.payload
        // }
        clearUserData: (state) => {
            state.user = null;
            state.error = null;
            state.isLoading = true;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGlobalData.pending, (state)=> {
                state.isLoading = true
                state.error = null
                // console.log('masuk pending')
            })
            .addCase(fetchGlobalData.fulfilled, (state, action)=> {
                state.isLoading = false
                state.user = action.payload
                // console.log('masuk success')
            })
            .addCase(fetchGlobalData.rejected, (state, action)=> {
                state.isLoading = false
                state.error = action.error.message
                state.user = null;
                // console.log('masuk error')
            })
    }

})

//Fetching Data in Global redux
// export const fetchGlobalData = async (dispatchAction) => {
//     try {
//         const token = localStorage.getItem('token');
//         const id = localStorage.getItem('id')
//          const response = await sspApi.get(`/user/${id}`, {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         })
//         dispatchAction(setUser(response.data))
//         dispatchAction(setProfile(response.data.Profiles))
//     } catch (err) {
//         console.log(err)
//     }
// }

//fetching Data using redux-Thunk
export const fetchGlobalData = createAsyncThunk(
  'globalData/fetchGlobalData',
  async (_, thunkAPI) => {
    try {
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('id')
        const response = await sspApi.get(`/user/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || 'Gagal fetch data');
    }
  }
);

export default globalDataSlice.reducer
// export const {setUser, setProfile} = globalDataSlice.actions
export const { clearUserData } = globalDataSlice.actions;