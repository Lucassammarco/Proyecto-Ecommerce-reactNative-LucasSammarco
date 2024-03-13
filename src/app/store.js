import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../feactures/counter/counterSlice'
import cartReducer from '../feactures/cart/cartSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { shopApi } from './services/shop'
import { authApi } from './services/auth'
import authReducer from '../feactures/auth/authSlice'
import { profileApi } from './services/profile'
import { ordersApi } from './services/orders'

export const store = configureStore({
    reducer: {
       counter: counterReducer,
       cart: cartReducer,
       auth: authReducer,
       [shopApi.reducerPath]: shopApi.reducer,
       [authApi.reducerPath]: authApi.reducer,
       [profileApi.reducerPath]: profileApi.reducer,
       [ordersApi.reducerPath]:ordersApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware,authApi.middleware,profileApi.middleware,ordersApi.middleware),
    
  })

  setupListeners(store.dispatch)

  