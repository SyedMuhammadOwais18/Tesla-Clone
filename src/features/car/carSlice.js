import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    cars:["Model S" , "Model 3" , "Model X", "Model Y"]
}


const carSlice = createSlice({
    name:"car",
    initialState,
    reducer:{}
});

//second car refers to the name key value above
export const carSelect = state => state.car.cars


export default carSlice.reducer;