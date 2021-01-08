function sum(matrix) {
  var length = matrix.length;
  var sum = 0
  for(var i = 0; i < matrix.length; i++) {
   sum += matrix[i][i];
  }
  var reverse = matrix.reverse();
  for(var b = 0; b < matrix.length; b++) {
    sum += reverse[b][b];
  }
  return sum;
}
