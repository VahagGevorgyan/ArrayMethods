"use strict";

function fake(start, end, data) {
  var stop = data.length - 1;

  var resultArr = [];

  if (start === undefined) {
    return resultArr;
  }

  if (start < 0) start = start + data.length;

  if (end !== undefined && end > 0) {
    stop = end - 1;
  }

  for (var index = start; index <= stop; index++) {
    var element = data[index];
    resultArr.push(element);
  }
  return resultArr;
}
console.log(fake(1, 4, [4, 5, 6, 7, 8, 0, 9, 77]));
