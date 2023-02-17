import { configureStore } from "@reduxjs/toolkit";
import musicListReducer from "../features/musicListSlice"

export default configureStore({
    reducer : {
        musicList: musicListReducer,
    }
});