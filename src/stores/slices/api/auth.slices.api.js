import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SERVER_URL } from "@/configs/site.config";
import { endPointApi } from "@/helpers/endPointApi";
const { LOGIN } = endPointApi;

export const authSliceApi = createApi({
     reducerPath: 'authApi',
     baseQuery: fetchBaseQuery({ baseUrl: SERVER_URL }),
     tagTypes: ['Auth'],
     endpoints: (builder) => ({
          postLogin: builder.mutation({
               query: (body) => ({
                    url: LOGIN,
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json',
                    },
                    body

               })
          })
     })


})
export const authApiReducer = authSliceApi.reducer;
export const authApiReducerPath = authSliceApi.reducerPath;
export const authApiMiddleware = authSliceApi.middleware;
export const {
     usePostLoginMutation
} = authSliceApi;