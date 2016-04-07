var CircularList = require("easy-circular-list");
var list = new CircularList();

list
  .add(1)
  .add(2)
  .add(3);

console.log(list.getNext());
console.log(list.getNext());
console.log(list.getNext());
console.log(list.getNext());

list.remove(2);

console.log(list.getNext());
console.log(list.getNext());
console.log(list.getNext());

list.add(4);

console.log(list.getNext());
console.log(list.getNext());
console.log(list.getNext());
console.log(list.getNext());
console.log(list.getNext());