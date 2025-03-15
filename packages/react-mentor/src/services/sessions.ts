// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Session } from "../types";
import { SESSIONS } from "../dummy-sessions";

async function fakeApiCall() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Return a mock Response object with the SESSIONS data
  return new Response(JSON.stringify(SESSIONS), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

// Define a service using a base URL and expected endpoints
export const sessionsApi = createApi({
  reducerPath: "sessions",
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
    // Override fetchBaseQuery to return dummy data
    fetchFn: fakeApiCall,
  }),
  endpoints: (builder) => ({
    getSessions: builder.query<Session[], void>({
      query: () => `sessions`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetSessionsQuery } = sessionsApi;
