import { api } from './index'


export const productApi = api.injectEndpoints({
    endpoints: (build) => ({
        getProduct: build.query({
            query: (params) => ({
                url: "/product",
                params,
            }),
            providesTags: ["Product"],
        }),
        getProductById: build.query({
            query: (id) => ({
                url: `/product/${id}`,
            }),
            providesTags: ["Product"],
        }),
        createProduct: build.mutation({
            query: (body) => ({
                url: "/product",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Product"],
        }),
        deleteProduct: build.mutation({
            query: (id) => ({
                url: `/product/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Product"],
        }),
        updateProduct: build.mutation({
            query: ({ id, body }) => ({
                url: `/product/${id}`,
                method: "PUT", // or "PATCH"
                body,
            }),
            invalidatesTags: ["Product"],
        }),
    }),
});

export const {
    useCreateProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,
    useGetProductQuery,
    useGetProductByIdQuery,
} = productApi;
