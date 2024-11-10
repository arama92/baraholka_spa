export const getNavigateLocalStorage = () => {
  return localStorage.getItem('navigate');
};
export const setNavigateLocalStorage = (path) => {
  localStorage.setItem('navigate', path);
};
