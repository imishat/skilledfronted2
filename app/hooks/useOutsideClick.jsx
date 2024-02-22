"use client";

import { useEffect } from "react";

/**
 * @name useOutsideClick
 * @description This hook is used to handle the outside click events.
 * Currently, it is used to close the dropdown when the user clicks outside the dropdown.
 *
 * @param {object} outsideRef
 * @param {function} callback
 *
 * @returns null
 *
 * @example
 * ```jsx
 * const outsideRef = useRef(null);
 * const [isOpen, setIsOpen] = useState(false);
 *
 * useOutsideClick(outsideRef, () => {
 *  setIsOpen(false);
 * });
 *
 * return (
 * <div ref={outsideRef}>
 * <button onClick={() => setIsOpen(!isOpen)}>Click me</button>
 * {isOpen && <div>Dropdown</div>}
 * </div>
 * );
 *
 * ```
 */

export const useOutsideClick = (outsideRef, callback) => {
  // handle the click event outside the dropdown
  const handleClickOutside = event => {
    if (outsideRef.current && !outsideRef.current.contains(event.target)) {
      callback();
    }
  };

  // adding the click event listener on the document
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });
};
