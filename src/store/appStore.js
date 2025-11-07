import { configureStore } from "@reduxjs/toolkit"
import userSliceReducer from "./slices/userSlice"
import feedSliceReducer from "./slices/feedSlice"

const appStore = configureStore({
    reducer: {
        user: userSliceReducer,
        feed: feedSliceReducer
    }
})

export default appStore;