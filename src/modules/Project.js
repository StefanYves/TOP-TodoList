import "../style.css";
import Task from "./Task";
import { itemDiv } from "./UI";

class Project {
  constructor(name, id) {
    this.name = name;
    this.tasks = [];
    this.id = id;
  }

  addTask(title, description, date) {
    const newTask = new Task(title, description, date, this.id);
    this.tasks.push(newTask);
    console.log("Tasks Array:", this.tasks);

    const taskDiv = document.createElement("div");
    taskDiv.innerHTML = `
        <div id = "task" class = "delete">
            <p>${newTask.title}</p>
            <p>${newTask.description}</p> 
            <p>${newTask.date}</p>
      `;

    // const btnDel = document.createElement("button");
    // btnDel.classList.add("delete");
    // btnDel.innerText = "Delete";

    // btnDel.addEventListener("click", () => {
    //   this.deleteTask(taskDiv);
    // });

    // taskDiv.appendChild(btnDel);
    // itemDiv.appendChild(taskDiv);

    // console.log("newTask:", newTask);
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
}

export default Project;
