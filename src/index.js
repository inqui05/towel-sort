'use strict';
module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return [];
  } else {
    let rightArr = [],
    result = [];

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 !== 0) {
      rightArr.push(matrix[i].reverse());
    } else {
      rightArr.push(matrix[i]);
    }
  }
  
  for (let index in rightArr) {
    result = [...result, ...rightArr[index]];
  }
  
  return result;
  }
};
