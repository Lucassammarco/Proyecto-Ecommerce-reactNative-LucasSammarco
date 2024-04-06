import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shopApi = createApi({
    reducerPath: "shopApi",
    baseQuery: fetchBaseQuery({baseUrl: 'https://coderapp-43309-default-rtdb.firebaseio.com/'}),
    endpoints:(builder) =>({
        getProductsByCategory:builder.query({
            query: (category) => `/products.json?orderBy="category"&equalTo="${category}"`,
            transformResponse: (response) => {
                const data = Object.values(response)
                return data
            }
        }),
        getCategories:builder.query({
            query: () => "/categories.json"
        }),
        getProduct:builder.query({
            query: (id) => `/products/${id}.json`
        }),
        updateProductStock: builder.mutation({
            query: ({ productId, quantity }) => ({
                url: `/products/${productId}/stock.json`,
                method: 'PATCH',
                body: { stock: quantity }
            })
        }),
    })
})

export const {useGetProductsByCategoryQuery, useGetCategoriesQuery, useGetProductQuery, updateProductStock} = shopApi