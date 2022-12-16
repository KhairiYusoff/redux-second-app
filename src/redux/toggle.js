import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    showCart: false
}

const toggleSlice = createSlice({
    name: 'toggle',
    initialState: initialValue,
    reducers: {
        toggleCart(state, action) {
            state.showCart = !state.showCart;
        }
    }
})

export const toggleActions = toggleSlice.actions;

export default toggleSlice;