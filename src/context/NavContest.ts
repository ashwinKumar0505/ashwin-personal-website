import { createContext, useContext } from "react";

const NavContext = createContext<{
  activeNav: string;
  updateActiveNav: (name: string) => void;
}>({
  activeNav: "Home",
  updateActiveNav: (name: string) => {},
});

const useNavContext = () => {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("Error in creating the context");
  }
  return context;
};

export { useNavContext, NavContext };
