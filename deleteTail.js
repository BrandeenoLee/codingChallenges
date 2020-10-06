deleteTail() {
  if (this.size === 0) return false;
  if (this.size === 1) {
    if (this.head === null) {
      return false;
    } else {
      this.head = null;
      this.tail = null;
      this.size -= 1;
      return true;
    }
  }
  const deletedTail = this.tail;
  let currentNode = this.head;
  while (currentNode.next) {
    if (!currentNode.next.next) {
      this.size -= 1;
      currentNode.next = null;
    } else {
      currentNode = currentNode.next;
    }
  }
  this.tail = currentNode;
  return deletedTail;
}
