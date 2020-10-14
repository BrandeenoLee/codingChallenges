printList () {
  const nodes = [];
  let current = this.head;
  while (current) {
    nodes.push(current.value);
    current = current.next;
  }
  return nodes.join(' -> ');
}
