import DoublyLinkedList from "./doublylinkedlist.js";

const node1 = {
  prev: null,
  next: null,
  data: "C",
};

const node2 = {
  prev: null,
  next: null,
  data: "A",
};

const node3 = {
  prev: null,
  next: null,
  data: "T",
};

const node4 = {
  prev: null,
  next: null,
  data: "L",
};

node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;

const list = new DoublyLinkedList();
list.addLast("C");
list.addLast("A");
list.addLast("T");
list.dumpList();
list.clear();
list.dumpList();
