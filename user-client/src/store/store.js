import { configureStore } from '@reduxjs/toolkit'
import globalDataReducer from "../features/global-data/globalData"
import authReducer from "../features/dispatch-function/authSlices"
import userReducer from "../features/dispatch-function/userSlices"
import passwordReducer from "../features/dispatch-function/passwordSlices"
import profileReducer from "../features/dispatch-function/passwordSlices"
import openTripReducer from "../features/dispatch-function/openTripSlices"

export const store = configureStore({
    reducer: {
        globalData: globalDataReducer,
        auth: authReducer,
        user: userReducer,
        password: passwordReducer,
        profile: profileReducer,
        openTrip: openTripReducer
    }
})