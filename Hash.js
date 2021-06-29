// const matriz = [
//   [2, 2],
//   [1, 2],
//   [3, 4],
// ];
const matriz = [
  [3, 4],
  [3, 4, 0, 3],
  [1, 2, 9, 3],
  [8, 7, 1, 3],
];
console.table(matriz);
function hash(key) {
  return key;
}
data = Array(matriz.length);
function setData(key, value) {
  const address = hash(key);
  if (!data[address]) {
    data[address] = [];
  }
  const currentBucket = getData(key);
  if (currentBucket) {
    if (currentBucket < value) {
      data[address].unshift([key, currentBucket]);
    }
    if (currentBucket > value) {
      data[address].unshift([key, value]);
    }
  } else {
    data[address].unshift([key, value]);
  }
}
function getData(key) {
  const address = hash(key);
  const currentBucket = data[address];
  if (currentBucket) {
    for (let i = 0; i < currentBucket.length; i++) {
      if (currentBucket[i][0] == key) {
        return currentBucket[i][1];
      }
    }
  }
  return false;
}
for (let x = 0; x < matriz.length; x++) {
  for (let y = 0; y < matriz[x].length; y++) {
    setData(y, matriz[x][y]);
  }
}

// setData(0, matriz[0][0]);
// setData(0, matriz[1][0]);
// setData(0, matriz[2][0]);
// setData(1, matriz[0][1]);
// setData(1, matriz[1][1]);
// setData(1, matriz[2][1]);
console.log(getData(0));
console.log(getData(1));
console.table(data);
