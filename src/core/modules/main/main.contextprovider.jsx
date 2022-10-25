import { useState } from "react";
import { MainContext } from "./main.context";

export const MainContextProvider = ({ children }) => {
  const [showNavbar, setShowNavbar] = useState(false);

  const className = showNavbar ? "container-scroller" : "";

  return (
    <MainContext.Provider
      value={{
        showNavbar,
        setShowNavbar,
        className,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
