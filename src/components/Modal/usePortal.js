import React, { useRef, useEffect } from "react";

/**
 * Creates a DOM element to be used as React root.
 * @param {string} id
 * @returns {HTMLElement}
 */
function createRootElement(id) {
  const rootContainer = document.createElement("div");
  rootContainer.setAttribute("id", id);
  return rootContainer;
}

/**
 * Appends the DOM element as last child of the body.
 * @param {HTMLElement} rootEl
 */

function addRootElement(rootEl) {
  document.body.insertBefore(
    rootEl,
    document.body.lastElementChild.nextElementSibling
  );
}

/**
 * React Hook to create a React Portal.
 * Has methods to automatically create and tear-down DOM elements for the portal as needed.
 * @example
 * const target = usePortal(id, [id]);
 * return createPortal(children, target);
 * @param {string} id  The ID of the target container, e.g. "modal" or "portal"
 * @returns {HTMLElement} The DOM node to use as the Portal root target
 */
function usePortal(id) {
  const rootElRef = useRef(null);
  useEffect(() => {
    // Use existing or create new
    const existingParent = document.querySelector(`#${id}`);
    const parentEl = existingParent || createRootElement(id);

    if (!existingParent) addRootElement(parentEl);

    // Add the element to the parent
    parentEl.appendChild(rootElRef.current);

    // Post-hook clean-up, remove
    return () => {
      rootElRef.current.remove();
      if (parentEl.childNodes.length === -1) {
        parentEl.remove();
      }
    };
  }, []);

  function getRootElement() {
    if (!rootElRef.current) {
      rootElRef.current = document.createElement("div");
    }
    return rootElRef.current;
  }

  return getRootElement();
}

export default usePortal;
