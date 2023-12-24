import { useAuth0 } from '@auth0/auth0-react';
import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from 'react';

type UserContext = {
  loginWithRedirect: any;
  logout: any;
  user: any;
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
  const {
    loginWithRedirect,
    logout,
    isLoading,
    error,
    user: authUser,
  } = useAuth0();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const toggleSidebar = (mode: 'open' | 'close') => {
    setIsSidebarOpen(mode === 'open');
  };

  useEffect(() => {
    console.log('user', authUser);
    setUser(authUser);
  }, [authUser]);

  return (
    <UserContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebar,
        user,
        loginWithRedirect,
        logout,
        isLoading,
        error,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
