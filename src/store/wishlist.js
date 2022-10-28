import {createSlice} from '@reduxjs/toolkit';

const STATUSES = {
    IDEL:"idel",
    LOADING:"loading",
    ERROR:"error"
}
let items = (localStorage.getItem("wishlistProducts"))?JSON.parse(localStorage.getItem("wishlistProducts")):"";
const initialState = {
    products:items,
    status:(localStorage.getItem("wishlistProducts"))?"idel":"loading",
}

const wishlistSlice = createSlice({
    name:"wishlistProducts",
    initialState,
    reducers:{
        addProducts(state,action){
            state.products = action.payload;
            state.status = STATUSES.IDEL;
        },
        removeProducts(state,action){
            let wishProduct = JSON.parse(localStorage.getItem("wishlistProducts"));
            wishProduct = wishProduct.filter((ele)=>{
                return (ele.id !== action.payload)?ele:""; 
            })
            localStorage.setItem("wishlistProducts",JSON.stringify(wishProduct))
            state.products = wishProduct;
        }
    }
})

export const {addProducts,removeProducts} = wishlistSlice.actions;
export default wishlistSlice.reducer;