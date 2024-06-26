import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function ClientOnlyPortal({ children, selector }) {
  const ref = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      ref.current = document.querySelector(selector);
      setMounted(true);
    } catch (error) {
      console.log(error);
    }
  }, [selector]);

  return mounted ? createPortal(children, ref.current) : null;
}
