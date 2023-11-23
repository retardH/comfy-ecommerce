import React, { createContext, FC, useContext, useState } from 'react';

type UserContext = {
  loginWithRedirect: any;
  logout: any;
  myUser: any;
  isLoading: boolean;
  error: any;
  isSidebarOpen: boolean;
  toggleSidebar: (mode: 'open' | 'close') => void;
};

const UserContext = createContext<UserContext>({} as UserContext);

type UserProviderProps = {
  children: React.ReactNode;
};
export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = (mode: 'open' | 'close') => {
    setIsSidebarOpen(mode === 'open');
  };
  return (
    <UserContext.Provider
      value={{ isSidebarOpen, toggleSidebar } as UserContext}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};