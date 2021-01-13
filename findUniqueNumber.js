function findUniq(arr) {
    return arr.filter(function(value){
      return arr.indexOf(value) === arr.lastIndexOf(value);
    })[0] || -1;
  }
  