function squareSum(numbers){
    var sum = 0;
     for (var i = 0, len = numbers.length; i < len; i++) {
       sum += 1 * numbers[i] * numbers[i];
     }
     console.log("sum", sum);
     return sum;
   }
   