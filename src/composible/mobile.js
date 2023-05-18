export function mediaQueryIsMobile() {
  const matchMedia = window.matchMedia("(max-width: 480px)");
  return matchMedia.matches;
}
