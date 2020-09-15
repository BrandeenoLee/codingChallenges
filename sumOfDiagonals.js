function sum(matrix) {
  
    let mainSum = 0, secondarySum = 0;
    for (let row = 0; row < matrix.length; row++) {
        mainSum += matrix[row][row];
        secondarySum += matrix[row][matrix.length - row - 1];
    }
    return (mainSum + secondarySum);
}

console.log('expected:  1 + 5 + 9 + 3 + 5 + 7 = ', 'result:', sum([[1,2,3], [4,5,6], [7,8,9]]));
