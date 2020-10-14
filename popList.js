pop() {
  if (this.isEmpty()) {
    return null;
  }
  const nodeToRemove = this.tail;
  // There's only one node!
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
    this.length--;
    return nodeToRemove;
  }

  let currentNode = this.head;
  let secondToLastNode;

  // Start at the front and iterate until
  // we find the second to last node
  while (currentNode) {
    if (currentNode.next === this.tail) {
      // Move the pointer for the second to last node
      secondToLastNode = currentNode;
      break;
    }
    currentNode = currentNode.next;
  }
  // Pop off that node
  secondToLastNode.next = null;
  // Move the tail to the second to last node
  this.tail = secondToLastNode;
  this.length--;

  // Initialized to this.tail
  return nodeToRemove;
}
