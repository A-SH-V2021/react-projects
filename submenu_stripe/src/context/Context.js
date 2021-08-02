import React, { useState, useContext } from "react";

const AppContxt = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false);
  const [isSubmenu, setIsSubmenu] = useState(false);
  const [location, setLocation] = useState({});
  const openSidebar = () => {
    setIsSidebar(true);
  };
  const closeSidebar = () => {
    setIsSidebar(false);
  };

  const openSubmenu = (txt, cordinate) => {
    setLocation(cordinate);
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
        location,
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
  return useContext(AppContxt);
};
