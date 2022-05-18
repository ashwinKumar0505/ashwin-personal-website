import { useRef, useEffect } from "react";
import { useNavContext } from "../context/NavContest";
import { useOnScreen } from "./useOnScreen";

export const useNav = (navName: string) => {
  const ref = useRef(null);
  const { updateActiveNav } = useNavContext();
  const isOnScreen = useOnScreen(ref);

  useEffect(() => {
    if (isOnScreen) {
      updateActiveNav(navName);
    }
  }, [isOnScreen, updateActiveNav, navName]);

  return ref;
};
