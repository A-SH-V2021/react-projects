import React, { useState, useContext } from "react";

const AppContxt = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(true);
  const [isSubmenu, setIsSubmenu] = useState(true);

  const openSidebar = () => {
    setIsSidebar(true);
  };
  const closeSidebar = () => {
    setIsSidebar(false);
  };

  const openSubmenu = () => {
    setIsSubmenu(true);
  };
  const closeSubmenu = () => {
    setIsSubmenu(false);
  };

  return (
    <AppContxt.Provider
      value={{
        isSidebar,
        isSubmenu,
        openSidebar,
        openSubmenu,
        closeSidebar,
        closeSubmenu,
      }}
    >
      {children}
    </AppContxt.Provider>
  );
};

export const useGlobalContxt = () => {
 return useContext(AppContxt)
};
