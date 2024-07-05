import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    items:localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [],
    statusTab: false
}
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers:{
        addToCart(state, params){
            const {product_id, quantity} = params.payload;
            const index_product_id = (state.items).findIndex(item => item.product_id === product_id);
            if(index_product_id >= 0){
                state.items[index_product_id].quantity += quantity;
            }else{
                state.items.push({product_id, quantity});
            }
            localStorage.setItem("carts", JSON.stringify(state.items));
        },
        changeQuantity(state, params){
            const {product_id, quantity} = params.payload;
            const index = (state.items).findIndex( item => item.product_id === product_id);
            if(quantity > 0){
                state.items[index].quantity = quantity;
            }else{
                state.items = (state.items).filter( item => item.product_id !== product_id);
            }
            localStorage.setItem("carts", JSON.stringify(state.items));
        },
        toggleStatusTab(state){
            state.statusTab =  state.statusTab == false ? true : false;
        }
    }
})
export const {addToCart, changeQuantity, toggleStatusTab} = cartSlice.actions;
export default cartSlice.reducer;