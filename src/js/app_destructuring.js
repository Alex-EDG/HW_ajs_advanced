export default function destructuring(obj) {

  const result =[];
  const { special } = obj;

  if (!special) {
    return result;
  };

  special.forEach(item => {
    const { id, name, icon, description = 'Описание недоступно' } = item;
    result.push({
      id: id,
      name: name,
      icon: icon,
      description: description
    });
  });
  return result;
};
