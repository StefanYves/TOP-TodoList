import "../style.css";
import Project from "./Project";
import Task from "./Task";

const content = document.getElementById("content");

const wrapDiv = document.createElement("div");
wrapDiv.classList.add("bg-gray-100", "w-full", "h-full", "flex", "flex-col");

const navDiv = document.createElement("div");
navDiv.classList.add(
  "flex",
  "flex-col",
  "justify-center",
  "top-0",
  "z-0",
  "w-full",
  "h-1/6",
  "bg-sky-800",
  "text-white",
  "text-6xl",
  "shadow-xl"
);

navDiv.innerText = "(SVG HERE)Todo List";

const wrapper = document.createElement("div");
wrapper.classList.add("h-full", "w-full", "flex", "flex-row");

const projectDiv = document.createElement("div");
projectDiv.classList.add(
  "bg-gray-200",
  "w-1/6",
  "shadow-[25px_0px_30px_-5px_rgba(0,0,0,0.1)]"
);

const addProject = document.createElement("div");
addProject.classList.add(
  "hover:bg-gray-300",
  "mt-5",
  "m-auto",
  "text-center",
  "w-1/2"
);
addProject.id = "project";
addProject.innerText = "+ Add Project";

projectDiv.innerHTML = `
    <p class = "font-bold text-2xl ml-5 mt-5">Projects</p>
`;
projectDiv.appendChild(addProject);

const itemDiv = document.createElement("div");
itemDiv.classList.add("w-full");

const footer = document.createElement("footer");
footer.innerHTML = `
<div class="flex justify-center items-center bg-sky-800  fixed bottom-0 w-full">
<p class="text-xl text-white font-bold mb-2 mt-2">
  Copyright © 2023 stefanyves (GIT SVG)
</p>
<a href="https://github.com/StefanYves" class="ml-3 w-8 h-8 bg-github-img bg-cover">
</a>
</div>`;

// Creating form for projects
const formDiv = document.createElement("div");
const taskFormDiv = document.createElement("div");
const overlay = document.getElementById("overlay");

formDiv.classList.add(
  "fixed",
  "top-1/2",
  "left-1/2",
  "transform",
  "-translate-x-1/2",
  "-translate-y-1/2",
  "bg-gray-200",
  "p-4",
  "shadow-lg",
  "rounded-lg",
  "z-20",
  "hidden"
);
formDiv.id = "form";

taskFormDiv.classList.add(
  "fixed",
  "top-1/2",
  "left-1/2",
  "transform",
  "-translate-x-1/2",
  "-translate-y-1/2",
  "bg-gray-200",
  "p-4",
  "shadow-lg",
  "rounded-lg",
  "z-20",
  "hidden"
);
taskFormDiv.id = "taskForm";

const projectForm = document.createElement("form");

projectForm.classList.add("flex", "flex-col", "items-center", "justify-center");

const titleLabel = document.createElement("label");
titleLabel.setAttribute("for", "title");
titleLabel.classList.add("mt-5", "text-xl", "ml-5");
titleLabel.textContent = "Title:";

const titleInput = document.createElement("input");
titleInput.setAttribute("type", "text");
titleInput.setAttribute("name", "title");
titleInput.setAttribute("id", "title");
titleInput.classList.add(
  "bg-gray-100",
  "text-gray-900",
  "mt-2",
  "p-3",
  "rounded-lg",
  "focus:outline-none",
  "focus:shadow-outline"
);

projectForm.appendChild(titleLabel);
projectForm.appendChild(titleInput);

formDiv.appendChild(projectForm);

function addProjectToSidebar(project) {
  const projectWrap = document.createElement("div");
  projectWrap.classList.add(
    "mt-5",
    "text-center",
    "hover:bg-gray-300",
    "m-auto",
    "w-1/2"
  );
  projectWrap.innerHTML = `<p>${project.name}</p>`;

  projectWrap.addEventListener("click", () => {
    selectedProject = project; // Assign the clicked project to the selectedProject variable
    displayTasksForSelectedProject(); // Update displayed tasks for the selected project
    console.log(selectedProject);
  });

  // Appending the new project title to the sidebar
  projectDiv.appendChild(projectWrap);

  // Hide the form after adding the project
  formDiv.classList.add("hidden");
  overlay.classList.add("hidden");
}

// Adding projects to the sidebar when the form is submitted
projectForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission

  // Get the title input value
  const titleInputValue = titleInput.value;
  console.log(titleInputValue);

  // Create a new Project object with the title
  const newProject = new Project(titleInputValue);

  addProjectToProjects(newProject); // Add the new project to the projects array
  populateProjectDropdown();

  // Add the project to the sidebar
  addProjectToSidebar(newProject);
});

// Adding projects to the sidebar when the "Add Project" button is clicked
addProject.addEventListener("click", () => {
  formDiv.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

let selectedProject = null;
const projects = []; // Array to store projects

function addProjectToProjects(project) {
  projects.push(project);
  console.log(projects);
}

function displayTasksForSelectedProject() {
  if (selectedProject) {
    const selectedProjectTasks = selectedProject.tasks; // Get tasks for the selected project

    itemDiv.innerHTML = "";
    // Iterate through selectedProjectTasks and create HTML elements to display them
    if (selectedProjectTasks.length === 0) {
      // If no tasks are present, display a message or handle as needed
      alert("No tasks available for this project.");
    } else {
      // Iterate through tasks and create HTML elements to display them
      selectedProjectTasks.forEach((task) => {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task-item"); // You can add classes for styling

        // Create elements for displaying task details
        const titlePara = document.createElement("p");
        titlePara.textContent = `Title: ${task.title}`;

        const descriptionPara = document.createElement("p");
        descriptionPara.textContent = `Description: ${task.description}`;

        const datePara = document.createElement("p");
        datePara.textContent = `Date: ${task.date}`;

        // Append elements to taskDiv
        taskDiv.appendChild(titlePara);
        taskDiv.appendChild(descriptionPara);
        taskDiv.appendChild(datePara);

        // Append taskDiv to itemDiv to display the task
        itemDiv.appendChild(taskDiv);
      });
    }
  } else {
    alert("Please select a project to view tasks");
  }
}

const taskForm = document.createElement("form");

taskForm.classList.add("flex", "flex-col", "items-center", "justify-center");

const nameLabel = document.createElement("label");
nameLabel.setAttribute("for", "title");
nameLabel.classList.add("mt-5", "text-xl", "ml-5");
nameLabel.textContent = "Name:";
const nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("name", "title");
nameInput.setAttribute("id", "title");
nameInput.classList.add(
  "bg-gray-100",
  "text-gray-900",
  "mt-2",
  "p-3",
  "rounded-lg",
  "focus:outline-none",
  "focus:shadow-outline"
);

const descriptionLabel = document.createElement("label");
descriptionLabel.setAttribute("for", "description");
descriptionLabel.classList.add("mt-5", "text-xl", "ml-5");
descriptionLabel.textContent = "Title:";

const descriptionInput = document.createElement("input");
descriptionInput.setAttribute("type", "text");
descriptionInput.setAttribute("name", "description");
descriptionInput.setAttribute("id", "description");
descriptionInput.classList.add(
  "bg-gray-100",
  "text-gray-900",
  "mt-2",
  "p-3",
  "rounded-lg",
  "focus:outline-none",
  "focus:shadow-outline"
);

const dateLabel = document.createElement("label");
dateLabel.setAttribute("for", "date");
dateLabel.classList.add("mt-5", "text-xl", "ml-5");
dateLabel.textContent = "Title:";

const dateInput = document.createElement("input");
dateInput.setAttribute("type", "date");
dateInput.setAttribute("name", "date");
dateInput.setAttribute("id", "date");
dateInput.classList.add(
  "bg-gray-100",
  "text-gray-900",
  "mt-2",
  "p-3",
  "rounded-lg",
  "focus:outline-none",
  "focus:shadow-outline"
);

const projectSelect = document.createElement("select");
projectSelect.setAttribute("id", "projectSelect");

projectSelect.classList.add(
  "bg-gray-100",
  "text-gray-900",
  "mt-2",
  "p-3",
  "rounded-lg",
  "focus:outline-none",
  "focus:shadow-outline"
);

function populateProjectDropdown() {
  // Clear existing options
  projectSelect.innerHTML = "";

  // Populate dropdown with projects from the array
  projects.forEach((project) => {
    const option = document.createElement("option");
    option.value = project.id;
    option.text = project.name;
    projectSelect.appendChild(option);
  });
}

taskForm.appendChild(nameLabel);
taskForm.appendChild(nameInput);
taskForm.appendChild(descriptionLabel);
taskForm.appendChild(descriptionInput);
taskForm.appendChild(dateLabel);
taskForm.appendChild(dateInput);
taskForm.appendChild(projectSelect); // Add project selection dropdown to the form

taskFormDiv.appendChild(taskForm);

taskForm.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();

    const title = nameInput.value;
    const description = descriptionInput.value;
    const date = dateInput.value;
    const selectedProjectId = projectSelect.value; // Get the selected project ID

    // Find the selected project from the array of projects using its ID
    const selectedProject = projects.find(
      (project) => project.id === selectedProjectId
    );

    if (selectedProject) {
      selectedProject.addTask(title, description, date); // Add task to the selected project
      // Refresh UI to display tasks for the selected project
      displayTasksForSelectedProject();
    } else {
      // Handle case where selected project is not found
      console.error("Selected project not found!");
    }
    taskFormDiv.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});

const addTask = document.createElement("button");
addTask.innerText = "Add Task";
addTask.addEventListener("click", (e) => {
  taskFormDiv.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

content.appendChild(wrapDiv);
content.appendChild(formDiv);
content.appendChild(taskFormDiv);
wrapper.appendChild(footer);
wrapper.appendChild(projectDiv);
wrapper.appendChild(itemDiv);
itemDiv.appendChild(addTask);
wrapDiv.appendChild(navDiv);
wrapDiv.appendChild(wrapper);

export { wrapDiv, itemDiv };
