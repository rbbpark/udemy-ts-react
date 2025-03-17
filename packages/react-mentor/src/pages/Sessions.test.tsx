import SessionsPage from "./Sessions";
import { renderWithProviders } from "../utils/test-utils";
import { screen } from "@testing-library/dom";
import { BrowserRouter } from "react-router-dom";

describe("SessionsPage", () => {
  it("handles good response", async () => {
    renderWithProviders(
      <BrowserRouter>
        <SessionsPage />
      </BrowserRouter>
    );
    screen.getByText("Loading...");

    await screen.findByRole("heading", { name: "Kickstart with React: Personal Intro" });
  });
});
