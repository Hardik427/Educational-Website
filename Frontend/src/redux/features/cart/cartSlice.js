import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products : [],
    selectedItems : 0,
    totalPrice : 0,
    tax : 0,
    taxeRate : 0.05,
    grandTotal : 0
  }

const createSlice = createSlice(
    {
        name: 'cart',
        initialState,
        reducers:{
            AddtoCart : (state,action) => {
                const isExist = state.products.find((product) => product.id === action.payload.id);

                if(!isExist) {
                    state.products.push({...action.payload,quantity: 1})
                } else{
                    console.log("Items already added")
                };


                state.selectedItems = setSelectedItems(state)
                state.totalPrice = setTotalPrice(state);
                state.tax = setTax(state);
                state.grandTotal = setGrandTotal(state)
            }

        }
})

export const setSelectedItems = (state) => state.products.reduce((total,product) => {
    return Number(total + product.quantity)
})

export const setTotalPrice = (state) => state.products.reduce((total, product) =>
{
    return Number(total + product.quantity)
})

export const setTax = (state) => setTotalPrice(state) * state.taxeRate 

export const setGrandTotal = (state) => {
    return setTotalPrice(state) + setTotalPrice(state) * state.taxeRate 
}

export const {addToCart} = createSlice.actions;
export default createSlice.reducer;