export const getCurrencyLocalStorage = () => {
  const items = localStorage.getItem('cartCurrency');
  if (!items) {
    return [];
  }
  return items.split(',');
};
