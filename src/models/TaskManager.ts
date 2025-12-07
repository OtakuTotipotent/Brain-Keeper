export interface TaskNode {
    data: string;
    next: TaskNode | null;
}

export class TaskManager {
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

    public printTasks(): void {
        if (!this.head) {
            console.log("No tasks available.");
            return;
        }
        let current: TaskNode | null = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}
