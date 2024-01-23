import "../style.css";
import Task from "./Task";
import { itemDiv, saveProjectsToLocalStorage } from "./UI";

class Project {
  constructor(name, id) {
    this.name = name;
    this.tasks = [];
    this.id = id;
  }

  addTask(title, description, date) {
    const newTask = new Task(title, description, date, this.id);
    this.tasks.push(newTask);
    saveProjectsToLocalStorage();
    console.log("Tasks Array:", this.tasks);
    console.log("newTask:", newTask);
  }

  deleteTask(taskDiv) {
    const taskIndex = Array.from(itemDiv.children).indexOf(taskDiv);

    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
      taskDiv.remove();

      console.log("Task deleted at index:", taskIndex);
    } else {
      console.error("Task element not found");
    }
  }

  toJSON() {
    return {
      name: this.name,
      tasks: this.tasks.map((task) => task.toJSON()), // Convert tasks to JSON
      id: this.id,
    };
  }
}

export default Project;
