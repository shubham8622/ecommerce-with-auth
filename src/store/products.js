import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

const STATUSES = {
    IDEL:"idel",
    LOADING:"loading",
    ERROR:"error"
}

const initialState = {
    products:"",
    status:"loading",
}

const productSlice = createSlice({
    name:"productListing",
    initialState,
    extraReducers:(builder)=>{
    builder
    .addCase(fetchingProducts.pending,(state)=>{
        state.status = STATUSES.LOADING;
    })
    .addCase(fetchingProducts.rejected,(state)=>{
        state.status = STATUSES.ERROR;
    })
    .addCase(fetchingProducts.fulfilled,(state,action)=>{
        state.products = action.payload;
        state.status = STATUSES.IDEL;
    })

    }
});

export default productSlice.reducer;

export const fetchingProducts = createAsyncThunk('fetch/products',async()=>{
    const res = await fetch(`https://fakestoreapi.com/products/`);
    const data = await res.json();
    return data;
})
