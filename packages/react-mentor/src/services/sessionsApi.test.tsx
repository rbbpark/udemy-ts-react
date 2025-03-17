import { renderHook, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { setupStore } from "../store/store"; // You'll need to create this
import { useGetSessionsQuery } from "./sessionsApi";
import type { PropsWithChildren, JSX } from "react";
import { SESSIONS } from "../dummy-sessions";

describe("Sessions Query", () => {
  it("should return sessions data", async () => {
    const store = setupStore();

    function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
      return <Provider store={store}>{children}</Provider>;
    }

    const { result } = renderHook(() => useGetSessionsQuery(), { wrapper: Wrapper });

    // Initially loading
    expect(result.current.isLoading).toBe(true);

    // Wait for the data to load
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    // Check the returned data
    expect(result.current.data).toEqual(SESSIONS);
  });
});
