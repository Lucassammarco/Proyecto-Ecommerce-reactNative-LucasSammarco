import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items:[],
    total:0
}

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addCartItem:(state,actions) =>{

            const { id, quantity } = actions.payload;
            const existingItem = state.items.find(item => item.id === id);
            
            if (!existingItem) {
                state.items.push({ ...actions.payload });
            } else {
                existingItem.quantity += quantity;
            }

            state.total = state.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        },
        deleteCartItem:(state,actions) =>{
            state.items = state.items.filter((item)=> item.id !== actions.payload)
            state.total = state.items.reduce((acc,item)=> acc = acc + (item.price * item.quantity),0)
        },
        deleteCart: (state) => {
            state.total = 0
            state.items = []
        }
    }
})

export const  {addCartItem,deleteCartItem, deleteCart} = cartSlice.actions

export default cartSlice.reducer