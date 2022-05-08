import React from "react";
import { useDarkModeContext } from "../context/DarkModeContext";

export const DarkMode: React.FC = () => {
  const { state: darkModeContext, dispatch: setDarkModeContext } =
    useDarkModeContext();
  const msg = darkModeContext.dark ? "🌙 It's dark" : "🔆 It's light";
  return (
    <div>
      <div>{msg}</div>
      <button
        onClick={() =>
          setDarkModeContext((prev) => ({
            ...prev,
            dark: !prev.dark,
          }))
        }
      >
        Toggle
      </button>
    </div>
  );
};
