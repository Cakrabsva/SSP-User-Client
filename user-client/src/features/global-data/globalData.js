import { createSlice } from "@reduxjs/toolkit";
import { sspApi } from "../../helpers/http-clients";

const globalDataSlice = createSlice ({
    name: "global-data",
    initialState: {
        user: {},
        profile:{}
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setProfile: (state, action) => {
            state.profile = action.payload
        }
    }
})

//Fetching Data in Global
export const fetchGlobalData = async (dispatchAction) => {
    try {
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('id')
         const response = await sspApi.get(`/user/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatchAction(setUser(response.data))
        dispatchAction(setProfile(response.data.Profiles))
    } catch (err) {
        console.log(err)
    }
}

export default globalDataSlice.reducer
export const {setUser, setProfile} = globalDataSlice.actions