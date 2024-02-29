import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../feactures/counter/counterSlice'
import cartReducer from '../feactures/cart/cartSlice'

export const store = configureStore({
    reducer: {
       counter: counterReducer,
       cart: cartReducer,
    },
  })

  