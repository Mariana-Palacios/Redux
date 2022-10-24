import {createSlice} from '@reduxjs/toolkit'

export const numbersSlice = createSlice({
    name: 'numbers',
    initialState: [],
    reducers:{
        addTask: (state, action)=>{
            state.push(action.payload)
        }
    }
})

export const {addNumbers} = numbersSlice.actions

export default numbersSlice.reducer