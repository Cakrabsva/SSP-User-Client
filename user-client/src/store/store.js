import { configureStore } from '@reduxjs/toolkit'
import globalDataReducer from "../features/global-data/globalData"
import authReducer from "../features/dispatch-function/authSlices"

export const store = configureStore({
    reducer: {
        globalData: globalDataReducer,
        auth: authReducer
    }
})