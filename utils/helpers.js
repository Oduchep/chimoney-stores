export const triggerUpdateStore = (setStore) => {
  setTimeout(() => {
    const stored = localStorage.getItem('store-data');
    setStore(JSON.parse(stored) || []);
  }, 300);
};

export const triggerUpdateStoreCount = (store, value) => {
  let updatedStore;

  const newStore = store?.filter((item) => item?.id !== value?.id);

  updatedStore = [...newStore, value];
  localStorage.setItem('store-data', JSON.stringify(updatedStore));
};

export const moneyFormat = (amount) => {
  if (!amount) return 0.0;
  return parseFloat(amount)
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

// for navbar
export const debounce = (func, wait, immediate) => {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
