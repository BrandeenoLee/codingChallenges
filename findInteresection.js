function FindIntersection(strArr) { 

    // code goes here  function FindIntersection(strArr) { 
   let arr1 = strArr[0].split(",");
    let arr2 = strArr[1].split(",");
    
    let intersectStrings = arr1.filter(function(value){
      return arr2.includes(value);
    });
    
    if(intersectStrings.length === 0){
      return false;
    }else{
      return intersectStrings.join(",").replace(/\s/g, "");
    }
    
    return strArr; 
  
  }