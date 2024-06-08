class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = {};
    this.head = null;
    this.tail = null;
  }

  get(key) {
    if (this.cache[key]) {
      this.moveToFront(key);
      return this.cache[key].value;
    }
    return null;
  }

  put(key, value) {
    if (this.cache[key]) {
      this.cache[key].value = value;
      this.moveToFront(key);
    } else {
      if (Object.keys(this.cache).length === this.capacity) {
        this.removeLast();
      }
      this.addToFront(key, value);
    }

    console.log("cache", this.cache)
  }

  // unshift
  addToFront(key, value) {
    const newNode = { key, value, next: null };
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.cache[key] = newNode;
  }
  // pop
  removeLast() {
    if (!this.head) return;

    const lastKey = this.tail.key;
    delete this.cache[lastKey];

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      while (current.next !== this.tail) {
        current = current.next;
      }

      current.next = null;
      this.tail = current;
    }
  }
  // setAt
  moveToFront(key) {
    const current = this.cache[key];

    if (current === this.head) return;

    let prev = null;
    let node = this.head;
    while (node && node.key !== key) {
      prev = node;
      node = node.next;
    }

    if (!node) return;

    if (node === this.tail) {
      this.tail = prev;
    }

    if (prev) {
      prev.next = node.next;
    }

    node.next = this.head;
    this.head = node;
  }
}

// Custom Hook in React JS 👇
// import { useRef } from "react";

// const useLRUCache = (capacity) => {
//   const cacheRef = useRef(new LRUCache(capacity));
//   console.log(cacheRef.current);

//   const get = (key) => cacheRef.current.get(key);
//   const put = (key, value) => cacheRef.current.put(key, value);

//   return { get, put };
// };

// export default useLRUCache;


let cache = new LRUCache(4);
cache.put(1, 10);
cache.put(2, 20);
cache.put(3, 10);
cache.put(4, 30);
cache.put(1, 40);
cache.put(2, 50);
cache.put(3, 30);
cache.put(4, 40);
cache.put(1, 60);
cache.put(4, 30);