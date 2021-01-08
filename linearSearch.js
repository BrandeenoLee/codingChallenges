const linearSearch = (list, target) => {
  for (let i = 0; i < list.length; i++){
    if( list[i] === target) return i
  }
  return null;
}

const list = [1,2,3,4,5,6,7,8,9,10]
let result = linearSearch(list, 8);
console.log(result); // 8
result = linearSearch(list, 19);
console.log(result); // null
