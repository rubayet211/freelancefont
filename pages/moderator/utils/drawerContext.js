import React from "react";

export const DrawerContext = React.createContext();
export const DrawerProvider = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(true);

  const openDrawer = () => {
    setIsOpen(true);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <DrawerContext.Provider value={{ isOpen, openDrawer, closeDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawer = () => React.useContext(DrawerContext);
