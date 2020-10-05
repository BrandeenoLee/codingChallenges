SinglyList.prototype.searchNodeAt = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'};
 
    // 1st use-case: an invalid position 
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }
 
    // 2nd use-case: a valid position 
    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }
 
    return currentNode;
};
