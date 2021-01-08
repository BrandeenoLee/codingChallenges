// using recursion
const findSum = (num) => {
   if(num < 10){
      return num;
   }
   const lastDigit = num % 10;
   const remainingNum = Math.floor(num / 10);
   return findSum(lastDigit + findSum(remainingNum));
}
console.log(findSum(2568));
