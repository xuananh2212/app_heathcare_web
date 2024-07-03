import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SERVER_URL } from "@/configs/site.config";
import { endPointApi } from "@/helpers/endPointApi";
const { DOCTOR } = endPointApi;

export const doctorSliceApi = createApi({
     reducerPath: 'doctorApi',
     baseQuery: fetchBaseQuery({ baseUrl: SERVER_URL }),
     tagTypes: ['DoctorApi'],
     endpoints: (builder) => ({
          getDoctors: builder.query({
               query: ({ page, limit, ...fields }) => {
                    const params = new URLSearchParams({
                         page: String(page || 1),
                         limit: String(limit || 10),
                         ...Object.fromEntries(
                              Object.entries(fields).map(([key, value]) => [key, String(value)])
                         ),
                    }).toString();
                    return `${DOCTOR}?${params}`;

               }
               ,
               providesTags(result) {
                    if (result && result.data && result.data.items) {
                         const final = [
                              ...result.data.items.map(({ id }) => ({
                                   type: 'DoctorApi',
                                   id,
                              })),
                              { type: 'DoctorApi', id: 'LIST' },
                         ];
                         return final;
                    }
                    return [{ type: 'DoctorApi', id: 'LIST' }];
               },
          })
     })

});
export const doctorApiReducer = doctorSliceApi.reducer;
export const doctorApiReducerPath = doctorSliceApi.reducerPath;
export const doctorApiMiddleware = doctorSliceApi.middleware;
export const {
     useGetDoctorsQuery
} = doctorSliceApi;