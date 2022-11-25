import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
 
export const githubApi = createApi({
  reducerPath: 'placeholder/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/'
  }),
  refetchOnFocus: true,
  endpoints: build => ({
    getUsersRepos:build.query({
      query: () => ({
        url: 'users',
        method: 'GET'
      })
    }),
  })
})

export const {useGetUsersReposQuery} = placeholderApi