const num = 9119;
const squared = num => {
   const numStr = String(num);
   let res = '';
   for(let i = 0; i < numStr.length; i++){
      const square = Math.pow(+numStr[i], 2);
      res += square;
   };
   return res;
};
console.log(squared(num));
