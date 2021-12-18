"use strict";
const a = [2, 3, 6, 78, 0];

function fakeMap(array, callback) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(callback(array[i], array));
  }
  return newArr;
}

console.log(
  fakeMap(a,function (val, a) {
    return val + 2;
  })
);
