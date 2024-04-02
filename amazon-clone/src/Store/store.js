import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./Slices/basketSlice";
import userSlice from "./Slices/userSlice";
import likesSlices from "./Slices/likesSlices";

const store = configureStore({
    reducer: {
            basket: basketSlice,
            user: userSlice,
            likes: likesSlices
    }
})

export default store;