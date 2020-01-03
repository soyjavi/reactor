export default (base = [], value = '', selected = [], fieldId = 'id') => {
  if (value.length < 1) return base;
  const isString = typeof base[0] === 'string';

  return base
    .filter((item) =>
      isString
        ? item.toLowerCase().search(value) > -1
        : JSON.stringify(Object.values(item))
            .toLowerCase()
            .search(value) > -1,
    )
    .filter((item) =>
      isString
        ? selected.includes(item) === false
        : selected.find((selectedId) => selectedId === item[fieldId]) === undefined,
    );
};
