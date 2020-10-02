var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var total = numbers.reduce(function(sum, value) {
return sum + value;
}, 0);

console.log(total);


// here I don't provide the seconds argument (initial value) -> 
// at first call, sum = numbers[0] and value = numbers[1] so the result is the same
var total = numbers.reduce(function(sum, value) {
return sum + value;
});

console.log(total);


var concatenate = numbers.reduceRight((str, value) => str = str + value, '');
console.log(concatenate); // '987654321'

// we start from '' add concatenate each value, starting from the right
