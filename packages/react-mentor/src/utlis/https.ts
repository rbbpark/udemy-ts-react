import { SESSIONS } from "../dummy-sessions";
import { type Session } from "../types";

export async function fakeApiCall(data: unknown, delay = 1000): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        new Response(JSON.stringify(data), {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        })
      );
    }, delay);
  });
}

export async function fetchSessions(): Promise<Session[]> {
  const response = await fakeApiCall(SESSIONS);
  if (!response.ok) {
    throw new Error("failed to fetch data");
  }
  const data = (await response.json()) as Session[];
  return data;
}
