import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getMe = createAsyncThunk('user/getUser', async () => {});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: {},
        isLogin: false,
    },
    reducers: {
        logout: (state) => {
            state.isLogin = false;
            state.current = {};
        },
    },
    extraReducers: {
        [getMe.fulfilled]: (state, action) => {
            state.isLogin = true;
            state.current = action.payload;
        },
        [getMe.rejected]: (state, action) => {
            state.isLogin = false;
            state.current = {};
        },
    },
});
export const { logout } = userSlice.actions;
export default userSlice;
