import { createSlice } from "@reduxjs/toolkit";

const complaintSlice = createSlice({
    name: "complaints",
    initialState: {
        complaints: []
    },

    reducers: {
        addComplaint: (state, action) => {
            state.complaints.push(action.payload)
        },
        clearComplaints: (state, action) => {
            state.complaints = []
        }
    }

})

export const { addComplaint, clearComplaints } = complaintSlice.actions
export default complaintSlice.reducer