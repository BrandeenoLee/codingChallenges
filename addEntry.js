prepend(value) {
  this.size += 1;
  const newNode = new LinkedListNode(value, this.head);
  this.head = newNode;
  if (!this.tail) this.tail = newNode;
  return this;
}
