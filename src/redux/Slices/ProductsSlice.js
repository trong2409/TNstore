import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '~/API/axiosConfig';

export const GetCategories = createAsyncThunk(
    'GetCategories',
    async (params, { rejectWithValue }) => {
        const response = await axios.get(`/api/categories`);
        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(response.data);
        }
        return response.data;
    },
);

export const GetColors = createAsyncThunk(
    'GetColors',
    async (params, { rejectWithValue }) => {
        const response = await axios.get(`/api/colors`);
        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(response.data);
        }
        return response.data;
    },
);

export const GetProducts = createAsyncThunk(
    'GetProducts',
    async (params, { rejectWithValue }) => {
        const response = await axios.post(
            `/api/products/?page=${params.page}`,
            {
                order: params.order,
                categories: params.categories,
                colors: params.colors,
            },
        );
        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(response.data);
        }
        return response.data;
    },
);

const initialState = {
    isLoading: false,
    error: '',
    categories: [],
    colors: [],
    result: {
        data: [],
        page: 1,
        totalPage: 12,
        totalProducts: 100,
    },
};

const Products = createSlice({
    name: 'Products',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GetProducts.pending, (state, action) => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(GetProducts.rejected, (state, action) => {
                state.isLoading = true;
                state.error = 'Some thing wrong';
                state.result = {};
            })
            .addCase(GetProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = '';
                state.result = action.payload;
            })
            .addCase(GetCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
            })
            .addCase(GetColors.fulfilled, (state, action) => {
                state.colors = action.payload;
            });
    },
});

export default Products;
