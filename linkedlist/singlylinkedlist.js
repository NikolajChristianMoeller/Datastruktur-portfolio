export default class SinglyLinkedList {
  head = null;

  add(enemy) {
    const node = new Node(enemy);
    if (this.head == null) {
      // Hvis listen er tom
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  getFirstNode() {
    return this.head;
  }

  getNextNode(node) {
    return node.next;
  }

  getFirst() {
    const node = this.getFirstNode();
    return node.data;
  }

  getNodeWith(data) {
    let current = this.head;
    while (current !== null) {
      if (current.data == data) {
        console.log(current.data);
        return current;
      }
      current = current.next;
    }
  }

  getLastNode() {
    let current = this.head;
    while (current.next != null) {
      current = this.getNextNode(current);
    }
    console.log(current);
  }

  getLast() {
    let current = this.head;

    if (current === null) {
      return null;
    }
    while (current.next !== null) {
      current = current.next;
    }

    // Return the data of the last node
    return current.data;
  }

  removeFirstNode() {
    const first = this.head; // Vi skal finde den første node
    const next = first.next; // Vi skal finde den næste node
    this.head = next; // Head skal pege på den næste node
    first.next = null; // Den første skal ikke pege på den næste
  }

  remove(data) {
    // Fjerner node med bestemt data
    const nodeToRemove = this.getNodeWith(data);
    if (nodeToRemove) {
      console.log(nodeToRemove);
      this.removeNode(nodeToRemove);
    }
  }

  // Fjerner en node fra listen
  removeNode(node) {
    // Hvis noden der skal fjernes er head
    if (this.head === node) {
      this.head = this.head.next;
      return;
    }

    // Finder noden før den, der skal fjernes
    let current = this.head;
    while (current.next && current.next !== node) {
      current = current.next;
    }

    // Hvis vi fandt den node, der skal fjernes
    if (current.next === node) {
      current.next = node.next;
    }
  }

  removeLastNode() {}

  dumpList() {
    let node = this.getFirstNode();
    while (node != null) {
      console.log(node.data);
      node = this.getNextNode(node);
    }
  }

  size() {
    let count = 0;
    let node = this.getFirstNode();
    while (node != null) {
      count++;
      node = this.getNextNode(node);
    }
    return count;
  }

  clear() {
    this.head = null;
  }
}

class Node {
  next; // Peger hen på næste node
  data; // Peger hen på data som er enemy i dette tilfælde

  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
