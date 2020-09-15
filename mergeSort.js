function merge(arrayR, arrayL) {
  var merged = [];
  indexR = 0;
  indexL = 0;
  while (merged.length < arrayR.length + arrayL.length) {
    if (indexL >= arrayL.length || arrayR[indexR] < arrayL[indexL]) {
      merged.push(arrayR[indexR]);
      indexR++;
    } else {
      merged.push(arrayL[indexL]);
      indexL++;
    }
  }
  return merged;
}

function mergeSort(array) {
  var lists = [];
  var currentList = [];
  // Create sublists out of the original list,
  // with each list sublist being a list that is
  // already sorted
  for (var i = 0; i < array.length; i++) {
    if (currentList.length && array[i] < currentList[currentList.length - 1]) {
      lists.push(currentList);
      currentList = [];
    }
    currentList.push(array[i]);
  }
  lists.push(currentList);
  // Until we merge into one list
  while (lists.length > 1) {
    var newLists = [];
    // Merge all adjacent lists
    for (var i = 0; i < Math.floor(lists.length * 0.5); i++) {
      newLists.push(merge(lists[i* 2], lists[i * 2 + 1]));
    }

    // if we have an off number of lists, push the last one
    // to the end
    if (lists.length % 2) {
      newLists.push(lists[lists.length - 1]);
    }
    lists = newLists;
  }
  return lists[0];
}
