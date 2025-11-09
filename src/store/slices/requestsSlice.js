import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
    name: "requests",
    initialState: [],
    reducers: {
        addRequests: (state, action) => {
            return action.payload
        },
        removeRequest: (state, action) => {
            const newReqArray = state.filter((req) => req._id !== action.payload);
            return newReqArray;
        }
    }
})

export const { addRequests, removeRequest } = connectionSlice.actions;

export default connectionSlice.reducer;