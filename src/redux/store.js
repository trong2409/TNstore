import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './Slices/cartSlice';
import userSlice from '~/redux/Slices/userSlice';
import BestSale from '~/redux/Slices/BestSaleSlice';
import Trending from '~/redux/Slices/TrendingSlice';
import ProductDetail from '~/redux/Slices/ProductDetailSlice';
import Products from '~/redux/Slices/ProductsSlice';

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        user: userSlice.reducer,
        BestSale: BestSale.reducer,
        Trending: Trending.reducer,
        ProductDetail: ProductDetail.reducer,
        Products: Products.reducer,
    },
});

export default store;
