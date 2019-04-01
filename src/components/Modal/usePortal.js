import { useRef, useEffect } from "react";

/**
 * React Hook to return an element to be used by a Portal
 * @param {string} id
 */
export default function usePortal(id) {
  const rootElRef = useRef(document.createElement("div"));

  useEffect(() => {
    const parentEl = document.querySelector(`#${id}`);
    parentEl.appendChild(rootElRef.current);

    return () => {
      rootElRef.current.remove();
    };
  }, []);

  return rootElRef.current;
}
