export default function orderByProps(obj, setSortOrder) {
  const propsBySortOrder = [];
  const restData = [];

  for (const key in obj) {
    if (setSortOrder.includes(key)) {
      const index = setSortOrder.indexOf(key);
      propsBySortOrder.splice(index, 0, { key, value: obj[key] });
    } else {
      restData.push({ key, value: obj[key] });
    };
  };
  restData.sort((a, b) => (a.key > b.key ? 1 : -1));
  return [...propsBySortOrder, ...restData];
};
