import { configureStore } from "@reduxjs/toolkit"
import userSliceReducer from "./slices/userSlice"
import feedSliceReducer from "./slices/feedSlice"
import connectionSliceReducer from "./slices/connectionSlice"
import requestsSliceReducer from "./slices/requestsSlice"

const appStore = configureStore({
    reducer: {
        user: userSliceReducer,
        feed: feedSliceReducer,
        connections: connectionSliceReducer,
        requests: requestsSliceReducer
    }
})

export default appStore;