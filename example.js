var CircularList = require("easy-circular-list");
var list = new CircularList();

list.add(1);
list.add(2);
list.add(3);

console.log(list.getNext());
console.log(list.getNext());
console.log(list.getNext());
console.log(list.getNext());

console.log(list.remove(2));

console.log(list.getNext());
console.log(list.getNext());
console.log(list.getNext());

list.add(4);

console.log(list.getNext());
console.log(list.getNext());
console.log(list.getNext());
console.log(list.getNext());
console.log(list.getNext());