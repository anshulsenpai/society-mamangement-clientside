import { createSlice } from "@reduxjs/toolkit";

const visitorSlice = createSlice({
    name: "visitors",
    initialState: [],
    reducers : {
        addVisitor : (state, action) => {
            state.push(action.payload)
        },
        clearVisitor : (state, action) => {
            return state = []
        }
    }
})

export const {addVisitor, clearVisitor} = visitorSlice.actions
export default visitorSlice.reducer