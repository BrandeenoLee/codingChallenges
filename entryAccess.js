includes(value) {
  if (!this.head) return false;
  let isNode = value.constructor.name === 'LinkedListNode';
  if (isNode) value = value.value;
  let currentNode = this.head;
  while (currentNode) {
    if (value !== undefined && value === currentNode.value) {
      return true;
    };
    currentNode = currentNode.next;
  };
  return false;
}
