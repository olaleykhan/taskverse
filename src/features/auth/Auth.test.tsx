// Auth.test.tsx
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Auth from "./Auth";
import { USERS } from "./constants";

describe("Auth Component", () => {
  const setUserIdMock = vi.fn();

  beforeEach(() => {
    localStorage.clear();
    setUserIdMock.mockClear();
  });

  test("renders the component correctly", async () => {
    render(<Auth setUserId={setUserIdMock} />);
    expect(
      await screen.findByText(/Welcome to Task-Verse/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Please sign in by selecting a user from the drop down/i)
    ).toBeInTheDocument();
  });

  test("handles sign-in and stores userId in localStorage", async () => {
    render(<Auth setUserId={setUserIdMock} />);
    userEvent.selectOptions(screen.getByRole("combobox"), "lekan_dev");
    userEvent.click(screen.getByRole("button", { name: /Sign In/i }));

    await waitFor(() => {
      expect(setUserIdMock).toHaveBeenCalledWith("lekan_dev");
      expect(localStorage.getItem("userId")).toBe("lekan_dev");
    });
  });

  test("handles random sign-in and assigns john_doe", async () => {
    render(<Auth setUserId={setUserIdMock} />);
    userEvent.selectOptions(screen.getByRole("combobox"), "random");
    userEvent.click(screen.getByRole("button", { name: /Sign In/i }));

    await waitFor(() => {
      expect(setUserIdMock).toHaveBeenCalledWith("john_doe");
      expect(localStorage.getItem("userId")).toBe("john_doe");
    });
  });
});
