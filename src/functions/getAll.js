const getAll = async () => {
  const res = await fetch(
    "https://people-32cc5-default-rtdb.firebaseio.com/people.json"
  );
  const data = await res.json();
  console.log(data);

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

// for (const key in data) {
//   loadedData.push({
//     id: key,
//     title: data[key].title,
//     openingText: data[key].openingText,
//     releaseDate: data[key].releaseDate,
//   });
// }
export default getAll;
