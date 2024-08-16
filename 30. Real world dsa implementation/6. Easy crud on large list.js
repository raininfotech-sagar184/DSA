// Doubly Linked List Node
class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

// Doubly Linked List
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Create (Insert at end)
    insert(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }

    // Read (Find a value)
    find(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    // Update (Update a value)
    update(oldValue, newValue) {
        const node = this.find(oldValue);
        if (node) {
            node.value = newValue;
        }
    }

    // Delete (Remove a value)
    delete(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                if (current.prev) current.prev.next = current.next;
                if (current.next) current.next.prev = current.prev;
                if (current === this.head) this.head = current.next;
                if (current === this.tail) this.tail = current.prev;
                this.length--;
                return;
            }
            current = current.next;
        }
    }

    // Shift (Remove first element)
    shift() {
        if (!this.head) return;
        const oldHead = this.head;
        this.head = oldHead.next;
        if (this.head) this.head.prev = null;
        this.length--;
        return oldHead.value;
    }
}

// Array CRUD operations
console.log('==========================================================>Array');
let array = [];

// Create
console.log('Array Create');
console.time('arrayCreate');
for (let i = 0; i < 1000000; i++) {
    array.push(i);
}
console.timeEnd('arrayCreate');

// Create 
console.time('pushInArray'); 
array.push(1000000); 
console.timeEnd('pushInArray');

// Read 
console.time('arrayRead');
let item = array.find(value => value === 5000);
console.timeEnd('arrayRead');

// Update 
console.time('arrayUpdate');
let index = array.indexOf(5000);
if (index !== -1) {
    array[index] = 9999;
}
console.timeEnd('arrayUpdate');

// Delete 
console.time('arrayDelete');
array = array.filter(value => value !== 1);
console.timeEnd('arrayDelete');

// Shift 
console.time('arrayShift');
array.shift();
console.timeEnd('arrayShift');

// Doubly Linked List CRUD operations
console.log('==========================================================> Doubly Linked List CRUD operations');
let linkedList = new DoublyLinkedList();

// Create
console.log('Linked List Create');
console.time('linkedListCreate');
for (let i = 0; i < 1000000; i++) {
    linkedList.insert(i);
}
console.timeEnd('linkedListCreate');

// Insert 
console.time('pushInDoublyLinkedList');
linkedList.insert(1000000);
console.timeEnd('pushInDoublyLinkedList');

// Read 
console.time('linkedListRead');
linkedList.find(5000);
console.timeEnd('linkedListRead');

// Update 
console.time('linkedListUpdate');
linkedList.update(5000, 9999);
console.timeEnd('linkedListUpdate');

// Delete 
console.time('linkedListDelete');
linkedList.delete(1);
console.timeEnd('linkedListDelete');

// Shift 
console.time('linkedListShift');
linkedList.shift();
console.timeEnd('linkedListShift');
