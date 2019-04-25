import { useRef, useEffect } from "react";

export default function useInterval(callback: any, delay: number) {
  const savedCallback: null | any = useRef(null);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}
