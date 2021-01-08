delete(value, deleteOne = false) {
  if (!this.head) return false;
  let deletedNode = null;
  // If the head needs to be deleted
  while (this.head && this.head.value === value) {
    this.size -= 1;
    deletedNode = this.head;
    this.head = this.head.next;
    if (deleteOne) return true;
  };
  let currentNode = this.head;
  // If any node except the head or tail needs to be deleted
  if (currentNode !== null) {
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        this.size -= 1;
        deletedNode = currentNode.next;
        currentNode.next = currentNode.next.next;
        if (deleteOne) return true;
      } else {
        currentNode = currentNode.next;
      };
    };
  };
  // If the tail needs to be deleted
  if (this.tail.value === value) {
    this.tail = currentNode;
  };
  if (deletedNode === null) {
    return false;
  } else {
    return true;
  };
}
