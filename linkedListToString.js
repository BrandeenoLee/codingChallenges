class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

var list = new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))



function stringify(list) {
  var string = "";
  while(list) {
    console.log(list.data)
    string += `${list.data} -> `;
    list = list.next
  }
return string + "null";
}
