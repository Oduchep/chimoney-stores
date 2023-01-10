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
