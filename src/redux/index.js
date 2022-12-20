import { configureStore } from "@reduxjs/toolkit";

import toggleSlice from './toggle';
import cartSlice from "./cart";

const store = configureStore({
    reducer: { toggle: toggleSlice.reducer, cart: cartSlice.reducer }
})

export default store;