import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: null,
    // total:0,
    // numberOfProducts:0,
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logInUser(state, action){

        },

        logOutUser(state, action){

        }
    }
})

// export const {addToCart, removeFromCart } = basketSlice.actions;

export default userSlice.reducer