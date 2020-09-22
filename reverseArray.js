let reverseArray = (arr) => {
    //Temp stack
    let stack = new Stack();

    for(let i = 0; i < arr.length; i++){
       //Copy all the values in stack
       stack.push(arr[i]);
    }

    for(let i = 0; i < arr.length; i++){
      //Copy elements back to the array
      arr[i] = stack.pop();
    }
  
  return arr;
}

//let reverseArray = (arr) => {
  //If the length is 0 
  //then return an empty array
  if(arr.length === 0){
    return [];
  }
  
  //Call the function recursively with one element less and so on.
  return [arr.pop()].concat(reverseArray(arr));
}
