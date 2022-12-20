import { createSlice } from '@reduxjs/toolkit';
import { GetCartLocalStorage, setCartLocalStorage } from '~/API/localStorage';

const cartSlice = createSlice({
    name: 'cart',
    initialState: GetCartLocalStorage(),
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const index = state.findIndex((x) => x.product._id === product._id);
            if (index >= 0) {
                state[index].quantity += 1;
            } else {
                state.push({ product: product, quantity: 1 });
            }
            setCartLocalStorage(state);
        },
        decrementAnItem: (state, action) => {
            const product = action.payload;
            const index = state.findIndex((x) => x.product._id === product._id);
            state[index].quantity -= 1;
            setCartLocalStorage(state);
        },
        incrementByAmount: (state, action) => {
            const { product, quantity } = action.payload;
            const index = state.findIndex((x) => x.product._id === product._id);
            if (index >= 0) {
                state[index].quantity += quantity;
            } else {
                state.push({ product: product, quantity: quantity });
            }
            setCartLocalStorage(state);
        },
        updateQuantity: (state, action) => {
            const { product, quantity } = action.payload;
            const index = state.findIndex((x) => x.product._id === product._id);
            state[index].quantity = quantity;
            setCartLocalStorage(state);
        },
        removeItem: (state, action) => {
            const removeId = action.payload;
            setCartLocalStorage(
                state.filter((x) => x.product._id !== removeId),
            );
            return state.filter((x) => x.product._id !== removeId);
        },
        clearCart: (state) => {
            return [];
        },
    },
});
export const {
    addToCart,
    decrementAnItem,
    incrementByAmount,
    updateQuantity,
    removeItem,
    clearCart,
} = cartSlice.actions;
export default cartSlice;
