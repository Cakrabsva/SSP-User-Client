import { configureStore } from '@reduxjs/toolkit'
import globalDataReducer from "../features/global-data/globalData"
import authReducer from "../features/dispatch-function/authSlices"
import userReducer from "../features/dispatch-function/userSlices"
import passwordReducer from "../features/dispatch-function/passwordSlices"

export const store = configureStore({
    reducer: {
        globalData: globalDataReducer,
        auth: authReducer,
        user: userReducer,
        password: passwordReducer
    }
})