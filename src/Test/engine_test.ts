import { TaskManager } from "../models/TaskManager";

const engine = new TaskManager();
const count = 10000;

console.log(`Testing Raw Engine with ${count} items...`);
console.time("Engine Speed");

for (let i = 0; i < count; i++) {
    engine.addTask(`Task ${i}`);
}

console.timeEnd("Engine Speed");
