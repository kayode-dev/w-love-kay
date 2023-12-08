
const getAll = async () => {
  const res = await fetch(process.env.REACT_APP_API_W_LOVE);
  const data = await res.json();

  const loadedData = [];

  for (const key in data) {
    loadedData.push({
      id: key,
      name: data[key].name,
      password: data[key].password,
      type: data[key].type,
      writeUp: data[key].writeUp,
    });
  }

  return loadedData;
};
export default getAll;
