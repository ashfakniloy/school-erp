import { useState, useRef, useEffect } from "react";

function useDropdown() {
  const [showDropdown, setShowDropdown] = useState(false);
  const node = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, []);

  const clickOutside = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setShowDropdown(false);
  };

  return [showDropdown, setShowDropdown, node];
}

export default useDropdown;
