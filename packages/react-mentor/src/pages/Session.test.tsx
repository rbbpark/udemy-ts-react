import SessionPage from "./Session";
import { renderWithProviders } from "../utils/test-utils";
import { screen } from "@testing-library/dom";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("SessionPage", () => {
  it("handles good response", async () => {
    renderWithProviders(
      <MemoryRouter initialEntries={["/session/sess01"]}>
        <Routes>
          <Route
            path="/session/:id"
            element={<SessionPage />}
          />
        </Routes>
      </MemoryRouter>
    );

    screen.getByText("No session found!");

    await screen.findByRole("heading", { name: "Kickstart with React: Personal Intro" });
  });
});
