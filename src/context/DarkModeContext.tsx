import React, { useContext, useState } from "react";

export type DarkModeContextState = {
  dark: boolean;
};

export type DarkModeContext = {
  state: DarkModeContextState;
  dispatch: React.Dispatch<React.SetStateAction<DarkModeContextState>>;
};

const defaultValue: DarkModeContextState = { dark: false };

const DarkModeContext = React.createContext<DarkModeContext | undefined>(
  undefined
);

export const DarkModeContextProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [context, setContext] = useState<DarkModeContextState>(defaultValue);
  const value = { state: context, dispatch: setContext };
  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};

export function useDarkModeContext(): DarkModeContext {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error(
      "DarkModeContext must be used within DarkModeContextProvider"
    );
  }
  return context;
}
