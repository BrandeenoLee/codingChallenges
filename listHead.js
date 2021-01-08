LinkedList.prototype.removeHead = function() {
  if (!this.head) return null;
  let value = this.head.value;
  this.head = this.head.next;
  
  if (this.head) this.head.prev = null;
  else this.tail = null;
  
  return value;
}
