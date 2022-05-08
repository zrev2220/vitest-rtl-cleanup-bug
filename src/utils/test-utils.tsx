import { render, RenderResult } from "@testing-library/react";
import { DarkModeContextProvider } from "../context/DarkModeContext";

export const renderWithContext = (ui: JSX.Element): RenderResult =>
  render(<DarkModeContextProvider>{ui}</DarkModeContextProvider>);
