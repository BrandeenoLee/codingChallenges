toArray(useNodes = false) {
  const nodes = [];
  let currentNode = this.head;
  while (currentNode) {
    nodes.push(useNodes ? currentNode : currentNode.value);
    currentNode = currentNode.next;
  };
  return nodes;
}
