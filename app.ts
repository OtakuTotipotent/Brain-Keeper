import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

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

// --- ENTRY POINT ---

async function main() {
    const rl = readline.createInterface({ input, output });
    const taskManager = new TaskManager();

    console.log("Welcome to Brain-Keeper Task Manager!");
    console.log("Commands: add <task>, ls, exit");

    while (true) {
        const answer = await rl.question("> ");

        const [command, ...args] = answer.trim().split(" ");

        switch (command) {
            case "add":
                const task = args.join(" ");
                taskManager.addTask(task);
                console.log(`Added task: ${task}`);
                break;
            case "ls":
                taskManager.printTasks();
                break;
            case "exit":
                console.log("Exiting Brain-Keeper. Goodbye!");
                rl.close();
                return;
            default:
                console.log("Unknown command. Please use add, ls, or exit.");
        }
    }
}

main();
