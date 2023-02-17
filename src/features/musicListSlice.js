import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value : []
}

export const musicListSlice = createSlice({
    name : "music list",
    initialState,
    reducers: {
        add: () => {
            console.log("called")
        }
    }
})


export default musicListSlice.reducer