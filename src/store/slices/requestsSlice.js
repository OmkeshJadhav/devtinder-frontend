import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
    name: "requests",
    initialState: [],
    reducers: {
        addRequests: (state, action) => {
            return action.payload
        },
        removeRequests: (state, action) => {
            return null
        }
    }
})

export const { addRequests, removeRequests } = connectionSlice.actions;

export default connectionSlice.reducer;