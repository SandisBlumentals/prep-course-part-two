/**
 * Queue
 *
 * Create a queue data structure. The queue
 * should be a class with methods 'add' and 'remove'.
 * Adding to the queue should store an element until
 * it is removed.
 *
 * Examples:
 * const q = new Queue();
 * q.add(1);
 * q.remove(); // returns 1
 */

class Queue {
  items: number[];
  constructor() {
    this.items = [];
  }

  add(n: number) {
    this.items.push(n);
  }  

  remove() {
    return this.items.shift();
  }
}

// I didnt do this task, because i don't know (yet) advanced TS

export { Queue };
