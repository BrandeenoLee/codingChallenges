const num = 45654356;
const greatestDigit = (num = 0, greatest = 0) => {
   if(num){
      const max = Math.max(num % 10, greatest);
      return greatestDigit(Math.floor(num / 10), max);
   };
   return greatest;
};
console.log(greatestDigit(num));
