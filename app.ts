interface TaskNode {
    data: string;
    next: TaskNode | null;
}

class TaskManager {
    private head: TaskNode | null;
    private tail: TaskNode | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    public addTask(data: string): void {
        const newNode: TaskNode = { data, next: null };
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail!.next = newNode;
            this.tail = newNode;
        }
    }
}
