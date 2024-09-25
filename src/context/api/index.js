import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query";

const baseQuery = async (args, api, extraOptions) => {
    const { dispatch } = api
    const rawBaseQuery = fetchBaseQuery({
        baseUrl: "https://headphones-server.onrender.com/",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("x-auth-token")
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers
        }
    })
}