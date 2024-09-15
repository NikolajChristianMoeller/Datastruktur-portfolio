export default class DoublyLinkedList {
  head = null;
  tail = null;

  addNodeLast(newNode) {
    if (!this.tail) {
      
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode; 
      this.tail = newNode;
    }
  }

  addNodeFirst(newNode) {
    if (!this.head) {
    
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head; 
      this.head.prev = newNode; 
      this.head = newNode; 
    }
  }

  addFirst(data) {
    const newNode = new Node(data);
    this.addNodeFirst(newNode);
  }
  
  addLast(data) {
    const newNode = new Node(data);
    this.addNodeLast(newNode);
  }

  first() {
    return this.head ? this.head.data : null;
  }

  last() {
    return this.tail ? this.tail.data : null;
  }

  removeFirst() {
    if (!this.head) return null;

    const data = this.head.data; 
    this.head = this.head.next; 

    if (this.head) {
      this.head.prev = null; 
    } else {
      this.tail = null; 
    }
    return data;
  }

  removeLast() {
    if (!this.tail) return null;

    const data = this.tail.data; 
    this.tail = this.tail.prev;

    if (this.tail) {
      this.tail.next = null; 
    } else {
      this.head = null; 
    }
    return data;
  }

  removeNode(node) {
    if (node === this.head) {
      this.removeFirst();
    } else if (node === this.tail) {
      this.removeLast();
    } else {
      node.prev.next = node.next; 
      node.next.prev = node.prev;
    }
  }

  remove(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        this.removeNode(current);
        return true;
      }
      current = current.next;
    }
    return false; 
  }

  nodeAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        return current;
      }
      current = current.next;
      count++;
    }
    return null; 
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  clear() {
    this.head = null;
    this.tail = null;
  }

  dumpList() {
    let current = this.head;
    while (current) {
      console.log({
        data: current.data,
        prev: current.prev ? current.prev.data : null,
        next: current.next ? current.next.data : null,
      });
      current = current.next;
    }
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
