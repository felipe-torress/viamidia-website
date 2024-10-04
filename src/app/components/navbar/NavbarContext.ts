import { createContext, useContext } from 'react';

// Define the shape of the context state
interface NavbarContextType {
  navbarHeight: number;
  setNavbarHeight: (height: number) => void;
}

// Create a Context with default values
export const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

// Custom hook to use the NavbarHeightContext
export function useNavbarContext() {
  const context = useContext(NavbarContext);
  if (context === undefined) {
    throw new Error('useNabarContext must be used within a NavbarContextProvider');
  }
  return context;
}
