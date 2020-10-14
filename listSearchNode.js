LinkedList.prototype.search = function(searchValue) {
  let currentNode = this.head;
  
  while(currentNode) {
    if (currentNode.value === searchValue) return currentNode;
    currentNode = currentNode.next; 
  }
  return null;
}
