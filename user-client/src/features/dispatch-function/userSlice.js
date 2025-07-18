import { createSlice } from "@reduxjs/toolkit";
import { sspApi } from "../../helpers/http-clients";
// import { fetchGlobalData } from "../global-data/globalData";

const userSlice = createSlice ({
    name: "user-slice",
    initialState: {},
    reducers: {}
})

export const onRegister = (form) => {
    return async () => {
        try {
            const {username, email, password} = form
            console.log({username, email, password})
            await sspApi.post('/user/register', {username, email, password}, {
                headers: {
                    "Content-Type": 'application/x-www-form-urlencoded'
                }
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export default userSlice.reducer