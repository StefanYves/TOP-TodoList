import "./style.css";

const myProject = [];

const content = document.getElementById("content");

class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  addTask(title, description, date) {
    const newTask = new Task(title, description, date);
    this.tasks.push(Task);
    console.log(this.tasks);

    const taskDiv = document.createElement("div");
    taskDiv.innerHTML = `
      <div id = "task" class = "delete">
          <p>${newTask.title}</p>
          <p>${newTask.description}</p> 
          <p>${newTask.date}</p>
      </div>
    `;

    taskDiv.addEventListener("click", () => {
      this.deleteTask(taskDiv);
    });

    content.appendChild(taskDiv);

    console.log(newTask);
  }

  deleteTask(taskDiv) {
    const taskIndex = Array.from(content.children).indexOf(taskDiv);

    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
      taskDiv.remove();

      console.log("Task deleted at index:", taskIndex);
    } else {
      console.error("Task element not found");
    }
  }
}

class Task {
  constructor(title, description, date) {
    this.title = title;
    this.description = description;
    this.date = date;
  }
}

const btn = document.getElementById("btn").addEventListener("click", (e) => {
  const input = document.getElementById("input").value;
  const newProject = new Project(input);

  newProject.addTask("munca", "de facut munca", "12/15/2023");
  myProject.push(newProject);

  console.log("MyProject:", myProject);
  console.log(newProject);

  const newDiv = document.createElement("div");
  newDiv.addEventListener("click", (e) => {
    newDiv.classList.add("hidden", "task");
  });

  newDiv.innerHTML = `
    <p>${newProject.name}</p>
  `;
  content.appendChild(newDiv);
});
