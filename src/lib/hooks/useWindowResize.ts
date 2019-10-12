import debounce from "lodash.debounce";
import { useEffect, useRef } from "react";

type Handler = (this: Window, ev: UIEvent) => any;

/**
 * useWindowResize is a hook that handle window resize
 * event
 *
 * @param handler Event listener for resize event
 */
const useWindowResize = (handler: Handler) => {
  const handlerRef = useRef(handler);

  // update ref.current if handler changes
  // this allows us to always get latest handler
  useEffect(() => {
    if (handlerRef) handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    const listener = debounce(handlerRef.current, 50);

    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);
};

export default useWindowResize;
