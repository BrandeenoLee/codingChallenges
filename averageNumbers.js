function averages(numbers) {
    var final = [];
    if (numbers) {
      for (var i=0; i<numbers.length-1; i++) {
        final.push((numbers[i] + numbers[i+1]) / 2);
      }
    }
    return final;
  }