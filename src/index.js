
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == undefined) {
    return [];
  } else {
  let arr = [];
  let leng = 0;
  for (let i = 0; i < 10; i++) {
      if (matrix[i] !== undefined) {
          leng ++
      } else break;
  }
    for (let i = 0; i < leng; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
          if ( i % 2 == 0) {
              arr.push(matrix[i][j]);
          } else {
              arr.push(matrix[i][matrix[i].length - j -1])
          }
      }
    }
  return arr;
  }
  
}
