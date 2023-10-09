import { createApi, fetchBaseQuery } from 'reduxjs/toolkit/query/react';

export const courseApi = createApi({
    reducerPath: 'courseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    endpoints: (builder) => ({
        createCourse: builder.mutation({
            query: (data) => ({
                url: '/course',
                method: 'POST',
                body: data,
            }),
        }),
    }),
})

export const { useCreateCourseMutation } = courseApi