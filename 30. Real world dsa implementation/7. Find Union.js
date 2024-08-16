// Regular scheduling using built-in sort
function regularScheduler(tasks) {
    // Sort tasks by deadline
    tasks.sort((a, b) => a.deadline - b.deadline);
    return tasks;
}

// Generate 100,000 records
function generateTasks(num) {
    const tasks = [];
    for (let i = 0; i < num; i++) {
        tasks.push({ name: `Task${i}`, deadline: Math.floor(Math.random() * 1000000) });
    }
    return tasks;
}

// Example usage
const tasks = generateTasks(1000000);
console.time("Regular Scheduler");
const sortedTasks = regularScheduler(tasks);
console.timeEnd("Regular Scheduler");
console.log("==========================================================================DSA");

class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(task) {
        this.heap.push(task);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index].deadline >= this.heap[parentIndex].deadline) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    extractMin() {
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.sinkDown(0);
        }
        return min;
    }

    sinkDown(index) {
        let leftChildIdx = 2 * index + 1;
        let rightChildIdx = 2 * index + 2;
        let smallest = index;

        if (leftChildIdx < this.heap.length && this.heap[leftChildIdx].deadline < this.heap[smallest].deadline) {
            smallest = leftChildIdx;
        }

        if (rightChildIdx < this.heap.length && this.heap[rightChildIdx].deadline < this.heap[smallest].deadline) {
            smallest = rightChildIdx;
        }

        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this.sinkDown(smallest);
        }
    }
}

function dsaScheduler(tasks) {
    const minHeap = new MinHeap();
    
    // Insert all tasks into the min heap
    tasks.forEach(task => minHeap.insert(task));
    
    // Extract tasks in order of deadlines
    const scheduledTasks = [];
    while (minHeap.heap.length > 0) {
        scheduledTasks.push(minHeap.extractMin());
    }
    
    return scheduledTasks;
}

// Example usage
const tasksDSA = generateTasks(1000000);
console.time("DSA Scheduler");
const sortedTasksDSA = dsaScheduler(tasksDSA);
console.timeEnd("DSA Scheduler");
