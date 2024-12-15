class Node {
  constructor(data) {
    this.next = null;
    this.data = data;
  }
}

export class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }


  enqueue(data) {
   const node = new Node(data);

   if (this.head === null) {
     this.head = node;
   } else {
     let current = this.head;
     while (current.next != null) {
       current = current.next;
     }
     current.next = node;
   }
   this.length++;
  }

  dequeue() {
    if (this.head == null) {
      return null;
    } else {
      this.head = this.head.next;
    }
    this.length--;
  }

  peek() {
    return this.head.data;
  }

  size() {
    return this.length;
  }

get(index) {
        let current = this.head;
        let count = 0;

        while (current) {
            if (count == index) {
                return current.data;
            }
            count++;
            current = current.next;
        }

        return null;
    }
}



let queue = new Queue();
queue.enqueue(2);
queue.enqueue(5);
queue.enqueue(7);
console.log(queue.get(0));

