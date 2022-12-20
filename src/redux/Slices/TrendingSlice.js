import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '~/API/axiosConfig';

export const GetTrenddingProducts = createAsyncThunk(
    'GetTrenddingProducts',
    async (params, { rejectWithValue }) => {
        const response = await axios.get('/api/products/trending');
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

const Trending = createSlice({
    name: 'Trending',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GetTrenddingProducts.pending, (state, action) => {
                state.isLoading = true;
                state.error = '';
                state.data = [];
            })
            .addCase(GetTrenddingProducts.rejected, (state, action) => {
                state.isLoading = true;
                state.error = 'Some thing wrong';
                state.data = [];
            })
            .addCase(GetTrenddingProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = '';
                state.data = action.payload;
            });
    },
});

export default Trending;
