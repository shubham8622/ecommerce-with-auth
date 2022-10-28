import {configureStore} from '@reduxjs/toolkit';
import userSliceReducer from './userLogin';
import productSliceReducer from './products'
import wishlistSliceReducer from './wishlist';
const store = configureStore({
    reducer:{
        user:userSliceReducer,
        products:productSliceReducer,
        wishlist:wishlistSliceReducer,
    }
})

export default store;