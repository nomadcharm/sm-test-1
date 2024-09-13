export const moveMouse = (e) => {
  const customMouse = document.querySelector('.mouse');
  customMouse.style.left = `${e.pageX}px`;
  customMouse.style.top = `${e.pageY}px`;
};
