import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { TaskManager } from "./src/models/TaskManager";

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
