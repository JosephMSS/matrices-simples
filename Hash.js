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
  data[address].push([key, value]);
}
function getData(key) {
  let menor = 0;
  const address = hash(key);
  const currentBucket = data[address];
  if (currentBucket) {
    for (let i = 0; i < currentBucket.length; i++) {
      if (currentBucket[i][0] == key) {
        if (0 === i) {
          menor = currentBucket[i][1];
        }
        if (menor > currentBucket[i][1]) {
          menor = currentBucket[i][1];
        }
      }
    }
    return menor;
  }
  return false;
}
for (let x = 0; x < matriz.length; x++) {
  for (let y = 0; y < matriz[x].length; y++) {
    setData(y, matriz[x][y]);
  }
}
let arr = [];
for (let i = 0; i < matriz.length; i++) {
  if (getData(i) || getData(i) === 0) {
    arr.push(getData(i));
  }
}
console.log("resultado final", arr);

// setData(0, matriz[0][0]);
// setData(0, matriz[1][0]);
// setData(0, matriz[2][0]);
// setData(1, matriz[0][1]);
// setData(1, matriz[1][1]);
// setData(1, matriz[2][1]);
// console.log("menor de fila 0", getData(0));
// console.log("menor de fila 1", getData(1));
// console.log("menor de fila 2", getData(2));
// console.log("menor de fila 3", getData(3));
console.log(matriz.length);
// console.table(data);
