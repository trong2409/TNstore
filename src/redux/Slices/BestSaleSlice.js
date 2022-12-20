import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '~/API/axiosConfig';

export const GetBestSaleProducts = createAsyncThunk(
    'GetBestSaleProducts',
    async (params, { rejectWithValue }) => {
        const response = await axios.get('/api/products/bestsale');
        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(response.data);
        }
        return response.data;
    },
);

const initialState = {
    isLoading: false,
    error: '',
    data: [],
};

const BestSale = createSlice({
    name: 'BestSale',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GetBestSaleProducts.pending, (state, action) => {
                state.isLoading = true;
                state.error = '';
                state.data = [];
            })
            .addCase(GetBestSaleProducts.rejected, (state, action) => {
                state.isLoading = true;
                state.error = 'Some thing wrong';
                state.data = [];
            })
            .addCase(GetBestSaleProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = '';
                state.data = action.payload;
            });
    },
});

export default BestSale;
