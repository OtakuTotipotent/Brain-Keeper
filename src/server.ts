import express from "express";
import { TaskManager } from "./models/TaskManager";

const taskManager = new TaskManager();

const server = express();
const PORT = process.env.PORT || 3000;

server.use(express.json());

server.post("/tasks", (req, res) => {
    const { task } = req.body;
    if (typeof task === "string" && task.trim() !== "") {
        taskManager.addTask(task);
        res.status(201).json({
            status: "success",
            data: task,
        });
    } else {
        res.status(400).json({
            status: "error",
            message: "Task cannot be empty",
        });
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
