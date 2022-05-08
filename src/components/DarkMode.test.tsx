import { cleanup, screen } from "@testing-library/react";
import { DarkMode } from "./DarkMode";
import { renderWithContext } from "../utils/test-utils";
import { useDarkModeContext } from "../context/DarkModeContext";
import { MockedFunction } from "vitest";
import userEvent from "@testing-library/user-event";

vi.mock("../context/DarkModeContext", async () => {
  const actual = await vi.importActual<
    typeof import("../context/DarkModeContext")
  >("../context/DarkModeContext");
  return {
    ...actual,
    useDarkModeContext: vi.fn(actual.useDarkModeContext),
  };
});

const mockedUseDarkModeContext = useDarkModeContext as MockedFunction<
  typeof useDarkModeContext
>;

describe("displays current dark mode", () => {
  test("light", () => {
    mockedUseDarkModeContext.mockReturnValueOnce({
      state: { dark: false },
      dispatch: () => {},
    });

    renderWithContext(<DarkMode />);
    expect(screen.getByText(/light/)).toBeInTheDocument();
    expect(screen.queryByText(/dark/)).toBeNull();
  });

  test("dark", () => {
    mockedUseDarkModeContext.mockReturnValueOnce({
      state: { dark: true },
      dispatch: () => {},
    });

    renderWithContext(<DarkMode />);
    expect(screen.getByText(/dark/)).toBeInTheDocument();
    expect(screen.queryByText(/light/)).toBeNull();
  });
});

test("toggles dark mode", async () => {
  const user = userEvent.setup();
  renderWithContext(<DarkMode />);
  expect(screen.getByText(/light/)).toBeInTheDocument();
  expect(screen.queryByText(/dark/)).toBeNull();

  await user.click(screen.getByText(/toggle/i));
  expect(screen.getByText(/dark/)).toBeInTheDocument();
  expect(screen.queryByText(/light/)).toBeNull();
});
