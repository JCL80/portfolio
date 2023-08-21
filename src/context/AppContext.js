import { createContext, useState } from "react";

export const AppContext = createContext();

function Context({ children }) {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <AppContext.Provider value={{ showSideBar, setShowSideBar }}>
      {children}
    </AppContext.Provider>
  );
}

export default Context;
