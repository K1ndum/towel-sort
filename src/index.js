
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  let leng = 0;
  for (let i = 0; i < 10; i++) {
      if (matrix[i] !== undefined) {
          leng ++;
      } else break;
  }
    for (let i = 0; i < leng; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        arr.push(matrix[i][j]);
      }
    }
  return arr;
  
}
