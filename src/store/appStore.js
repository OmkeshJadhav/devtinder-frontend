import { configureStore } from "@reduxjs/toolkit"
import userSliceReducer from "./slices/userSlice"

const appStore = configureStore({
    reducer: {
        user: userSliceReducer,
    }
})

export default appStore;