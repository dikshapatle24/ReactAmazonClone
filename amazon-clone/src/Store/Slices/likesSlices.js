import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    likeditems: [],
    // total:0,
    // numberOfProducts:0,
}
const likesSlice = createSlice({
    name: "likes",
    initialState,
    reducers: {
        likeItems(state, action){

        },

        dislikeItems(state, action){

        }
    }
})

// export const {addToCart, removeFromCart } = basketSlice.actions;

export default likesSlice.reducer