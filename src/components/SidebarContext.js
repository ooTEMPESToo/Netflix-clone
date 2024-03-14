import React, { createContext, useState } from 'react';

export const SidebarContext = createContext({
  isVisible: true,
  setIsVisible: () => {},
});

function SidebarProvider({ children }) {
  const [isVisible, setIsVisible] = useState(true);

  const toggleSidebar = () => setIsVisible(!isVisible);

  return (
    <SidebarContext.Provider value={{ isVisible, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

export default SidebarProvider;
