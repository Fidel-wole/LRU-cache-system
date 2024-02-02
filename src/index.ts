import { LRUCache } from "lru-cache";
const cache = new LRUCache<string, any>({
  max: 100, // maximum numer of items in the cache
});
const data = [
  {
    id: 2,
    name: "wole",
    gender: "female",
  },
  {
    id: "3",
    name: "Shade",
    gender: "Female",
  },
];

function fetchDataFromDatabase(id: number) {
  const datas = data.find((dataId) => dataId.id === id);
  if (datas) {
    console.log(`Fetching data for key: ${id}`);
    return `Data for ${datas?.name}`;
  } else {
    return `No data found for ${id}`;
  }
}

function getData(key: any) {
  //check if the data is in the cache

  const cachedData = cache.get(key);
  if (cachedData) {
    console.log(`Data found in cache for key: ${key}`);
    return cachedData;
  }
  //if not in the cache
  const newData = fetchDataFromDatabase(key);
  cache.set(key, newData);
  return newData;
}

console.log(getData(1));
console.log(getData(2));
