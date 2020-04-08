import React, { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

const Model = ({ children }) => {
  const elref = useRef(null);
  if (!elref.current) {
    const div = document.createElement("div");
    elref.current = div;
  }

  useEffect(() => {
    const modelelement = document.getElementById("modal");
    modelelement.append(elref.current);
    return () => modelelement.removeChild(elref.current);
  }, []);

  return createPortal(<div>{children}</div>, elref.current);
};

export default Model;
