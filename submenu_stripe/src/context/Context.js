import React, { useState, useContext } from "react";
import subLinks from '../data'

const AppContxt = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false);
  const [isSubmenu, setIsSubmenu] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({page:'',links:[]})

  const openSidebar = () => {
    setIsSidebar(true);
  };
  const closeSidebar = () => {
    setIsSidebar(false);
  };

  const openSubmenu = (txt, coorinates) => {

    const specialItem=subLinks.find((item)=>item.page===txt)
    
    setPage(specialItem)
    setLocation(coorinates);
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
        page,
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
