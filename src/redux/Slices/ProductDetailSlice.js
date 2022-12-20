import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '~/API/axiosConfig';

export const GetProductDetail = createAsyncThunk(
    'GetProductDetail',
    async (params, { rejectWithValue }) => {
        const response = await axios.post(`/api/products/?id=${params.id}`);
        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(response.data);
        }
        return response.data;
    },
);

const initialState = {
    isLoading: false,
    error: '',
    data: {},
};

const ProductDetail = createSlice({
    name: 'ProductDetail',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GetProductDetail.pending, (state, action) => {
                state.isLoading = true;
                state.error = '';
                state.data = [];
            })
            .addCase(GetProductDetail.rejected, (state, action) => {
                state.isLoading = true;
                state.error = 'Some thing wrong';
                state.data = [];
            })
            .addCase(GetProductDetail.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = '';
                state.data = action.payload;
            });
    },
});

export default ProductDetail;
