class Node {
  constructor(val) {
    this.val = val
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0
  }

  push(value) {
    var newNode = new Node(value)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }

  findMiddle() {   
      var count = 0
      var current = this.head
      var index = Math.floor(this.length/2)
      while (count !== index) {
        current = current.next;
        count++
      } 
    return current
  }
  find(index) {
    if (index < 0 || index >= this.length) return null
    var count, current;
    if (index <= this.length / 2) {
      count = 0
      current = this.head
      while (count !== index) {
        current = current.next;
        count++
      }
    } else {
      count = this.length - 1
      current = this.tail
      while (count !== index) {
        current = current.prev;
        count--
      }

    }
    return current
  }
  
}


var list = new LinkedList()
list.push("1")
list.push(2)
list.push(3)
list.push(4) 

 

console.log(list.findMiddle(1).val)
