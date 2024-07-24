// Logout.test.tsx
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Logout from "./Logout";

describe("Logout Component", () => {
  test("renders the logout button and calls onLogout when clicked", async () => {
    const onLogoutMock = vi.fn();
    render(<Logout onLogout={onLogoutMock} />);

    const button = screen.getByRole("button", { name: /Logout/i });
    expect(button).toBeInTheDocument();

    userEvent.click(button);

    await waitFor(() => {
      expect(onLogoutMock).toHaveBeenCalledTimes(1);
    });
  });
});
