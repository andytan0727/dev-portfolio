/**
 * window.matchMedia wrapper for matching mobile viewport.
 * Mobile viewport breakpoint is in sync with rebass,
 * which is 40em
 *
 * @returns boolean specifying whether the viewport is matching 40em and LOWER
 */
export const matchMediaMobile = () =>
  window.matchMedia("(max-width: 40em)").matches;

/**
 * window.matchMedia wrapper for matching tablet viewport.
 * Tablet viewport breakpoint is in sync with rebass,
 * which is 52em
 *
 * @returns boolean specifying whether the viewport is matching 52em and LOWER
 */
export const matchMediaTablet = () =>
  window.matchMedia("(max-width: 52em)").matches;
