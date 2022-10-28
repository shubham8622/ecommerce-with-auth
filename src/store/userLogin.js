import {createSlice} from '@reduxjs/toolkit';

const STATUSES = {
    IDEL:"idel",
    LOADING:"loading",
    ERROR:"error"
}

const initialState = {
    userName:""
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        addUserData(state,action){
            state.userName = action.payload;
        }
    }
});

export const {addUserData} = userSlice.actions;
export default userSlice.reducer;
