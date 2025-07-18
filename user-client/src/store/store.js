import { configureStore } from '@reduxjs/toolkit'
import globalDataReducer from "../features/global-data/globalData"

export const store = configureStore({
    reducer: {
        globalData: globalDataReducer
    }
})