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

navDiv.innerHTML = `<div class="flex items-center ml-5"><img class="w-16" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB7klEQVR4nO3aTatNURzH8X3rkgkmUrrhlpkypFwvwMRMBvIWxEvAgMsYQ0MpU5SJiRuSh1egJPcSJlIYePho6X918nCds/ZZZ+9T61u7zlnn//D7ndVae+9zdtMUAjtxFW/jSK93NNME5vDSn7zAtmZawKUQfiNMpeNmjF2ctJj1uIBX8pkbqLe9RZ0VLCZNOUbOa8fdv9RcalnzXI6R9C0k9g8R+5OMHkPlYSFCV0btMZK40kba9MhqkkufjCyNcy11ZmQSqEaCpifI1VONFEKdkaDpCXL1VCOFUGckaHqCvhvBZjz63zWXPhvBLG5Hq8fTbGT13v4ddk2lEZyIFp9L3oU2JY3gIL7gO44V1aOQEezG+yh/qrgeBYxgC55F6euYKa7HEIm4h6eYH6LeBjyIsvfT+3HraWMk7f+J19i3RtwMrkXsc2wtoaeNkY24NbD7HP1H3JmI+YA9a9XsbI3ESe1yhKdd6PRvnx+J8a84NLKQSS92nMS3SLuCddiLjzF2fGQRXe1aOIxPkXoHb8b1C7xJb79p0cfiXyVdS82OLKBrI5E7jyd4iE05NXphpASqkaDpCXL1VCOFUGckaHqCXD3VSCHUGfHrf/aFHszGgdCynJOcHpnoG2dzn0VZHJiZLllOJrKeRak03fADfQMFgQCPpaMAAAAASUVORK5CYII=">Todo List</div>`;

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
  "w-1/2",
  "font-bold"
);
addProject.id = "project";
addProject.innerText = "+ Add Project";

projectDiv.innerHTML = `
    <p class = "font-bold text-2xl ml-5 mt-5">Projects</p>
`;
projectDiv.appendChild(addProject);

const itemDiv = document.createElement("div");
itemDiv.classList.add("w-full", "flex", "flex-wrap");

const footer = document.createElement("footer");
footer.innerHTML = `
<div class="flex justify-center items-center bg-sky-800  fixed bottom-0 w-full">
<p class="text-xl text-white font-bold mb-2 mt-2">
  Copyright © 2023 stefanyves 
</p>
<a href="https://github.com/StefanYves" class="ml-3 w-8 h-8 bg-github-img bg-cover">
<img src="data:image/png;base64,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">
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

  projectWrap.innerHTML = `<p class="font-bold text-lg">${project.name}</p>
  <button class="delete-button rounded-full p-1 bg-red-300"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABAElEQVR4nOXUO2oCYRwE8CkknVcw6AV81BG9gI/aBwHbaNqINpY+WkUvoGir6AUU0yrJBQxaxV5Bg2FlKqv5S0AkA1+x8JtvtlgW+C+pADhdnOo1F53+6NxuwMknkf/8pCXAzoeCJ8Qxw0CcnbGCO8QvhoE8O20Fl6/4SmrslBScJe4aBnrsZBQcJZ4aBmbsRBTsI14ZBr7Y8Sr4AcAPgCMAl+Adc2DH6UrZ8I08gn2kXcOQd5aeBBumnVsGBiylBJum7VsGGiy9CbZIW7cMvLLUFGyLtmAZSLI0FOyINmEZCLG0EOySNmgZcAPYG/7/O3ZMyQHYCpd/A3i2Xn4/+QVXaHujT54Q+AAAAABJRU5ErkJggg=="></button>`;

  projectWrap.querySelector(".delete-button").addEventListener("click", () => {
    deleteProject(project.id);
  });

  function deleteProject(projectId) {
    // Remove the project from the projects array
    projects = projects.filter((project) => project.id !== projectId);
    saveProjectsToLocalStorage();

    // Repopulate the project dropdown
    populateProjectDropdown();

    // Remove the project from the sidebar
    const projectElement = document.querySelector(`[data-id="${projectId}"]`);
    if (projectElement) {
      projectDiv.removeChild(projectElement);
    }
  }

  projectWrap.setAttribute("data-id", project.id);

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
  const newProject = new Project(titleInputValue, generateId());
  console.log(newProject.id);

  addProjectToProjects(newProject); // Add the new project to the projects array
  populateProjectDropdown();

  // Add the project to the sidebar
  addProjectToSidebar(newProject);

  console.log("titleinputvalue:", titleInputValue, "newproject:", newProject);
});

// Adding projects to the sidebar when the "Add Project" button is clicked
addProject.addEventListener("click", () => {
  formDiv.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

let projectIdCounter = 0;

function generateId() {
  projectIdCounter++;
  return projectIdCounter;
}

let selectedProject = null;
let projects = []; // Array to store projects

loadProjectsFromLocalStorage();

// Load projects from local storage on page load

function loadProjectsFromLocalStorage() {
  const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
  projects = storedProjects.map((projectData) => {
    const project = new Project(projectData.name, projectData.id);
    projectData.tasks.forEach((taskData) => {
      project.addTask(taskData.title, taskData.description, taskData.date);
    });
    return project;
  });

  // Add loaded projects to the sidebar
  projects.forEach((project) => addProjectToSidebar(project));
}

function saveProjectsToLocalStorage() {
  const projectsData = projects.map((project) => project.toJSON());
  localStorage.setItem("projects", JSON.stringify(projectsData));
}

function addProjectToProjects(project) {
  projects.push(project);
  saveProjectsToLocalStorage();
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
        taskDiv.classList.add(
          "task-item",
          "ml-5",
          "mt-5",
          "p-5",
          "h-1/6",
          "shadow-md",
          "bg-sky-200"
        ); // You can add classes for styling

        // Create elements for displaying task details
        const titlePara = document.createElement("p");
        titlePara.classList.add("font-bold");
        titlePara.textContent = `Title: ${task.title}`;

        const descriptionPara = document.createElement("p");
        descriptionPara.classList.add("font-bold");
        descriptionPara.textContent = `Description: ${task.description}`;

        const datePara = document.createElement("p");
        datePara.classList.add("font-bold");
        datePara.textContent = `Date: ${task.date}`;

        const btnDel = document.createElement("button");
        btnDel.classList.add(
          "delete",
          "bg-green-400",
          "font-bold",
          "p-2",
          "rounded-full",
          "mt-2",
          "ml-2"
        );
        btnDel.innerHTML = `<img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB+ElEQVR4nO2ZP0hcQRCHv4uGmIjEEJADJUSwCTYWWogkBAURQbnqWq+MTVBIlUIEGy21EEQruSZFiqQ5QQstBFEIpggiWIgcGgiJckSUM3qysMJj2PPv3fkm7AdTvMfu7Pu9NzvM7AOPx+PxeP5vIsBboAsoQzGTQM7aLErpCYgw9g94gDKeAmkhZBWFzDi+RgvKaAfOhJAxlPEE2BIiNoHHKGNCiDgFXqOMVrsXgkKMMFU8An4IEdtAFcoYFSLMZu9EGU1AVgiZRhnlwDchYhd4hjKGhIgcEEMZr4AjISKJMkzxtyxE/AJqUMYHR0jFUUY98FeI+IrCkFoSIg6A2mIt+AaYBz4BLwrot98RUgmKWC78CSy0BzQXwK95IRkhIkURee7oB0xM997Rb0r4zBT4a1/Z9Ae7tPfcjj6HPxNmJTmGGXYsbmzKlhbXJQr8Fj4W7RolI+Eo6IzN3aDE/izmHgIN3AMdwL5DzHeg7oq5cce8Qe6RRtvoyIdK2zI8X9L4KcavhOHEMAqsOcSY7NPtGJ8U447tCwkFlcAXh5gT4F1gXLdjzEdCRhkwniejmfvVwI64vw48JKQM2OMa174JXmcv2UehIWbTae4SG0EJLY7sdGEbQAWKeOk4lzJh14ZCqoGFgBBzsKCWiO1l1P0C8Hg8HkrGOUae57R9PfheAAAAAElFTkSuQmCC">`;

        btnDel.addEventListener("click", () => {
          selectedProject.deleteTask(taskDiv);
        });

        // Append elements to taskDiv
        taskDiv.appendChild(titlePara);
        taskDiv.appendChild(descriptionPara);
        taskDiv.appendChild(datePara);
        taskDiv.appendChild(btnDel);

        // Append taskDiv to itemDiv to display the task
        // taskWrapper.appendChild(taskDiv);
        itemDiv.appendChild(taskDiv);
        console.log("selectedproject in display function:", selectedProject);
      });
    }
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
descriptionLabel.textContent = "Description:";

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

  // Create a default option
  const defaultOption = document.createElement("option");
  defaultOption.text = "Select a project";
  projectSelect.add(defaultOption);

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
    const selectProject = projects.find((project) => {
      return project.id === parseInt(selectedProjectId);
    });

    if (selectProject) {
      selectProject.addTask(title, description, date); // Add task to the selected project
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
addTask.innerHTML = `<div class="fixed bottom-14 right-5">
<button
  type="button"
  class="bg-sky-800 hover:bg-sky-900 focus:ring-sky-500 inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2"
  )}
><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAANklEQVR4nGNgGFHgPxSMWoAT/B8NIkLg/8gOov9UBgx0t4AY8J8SzaMWUAX8H42D4R9EgxIAADOHLuA9EPgjAAAAAElFTkSuQmCC">
</button>
</div>`;
addTask.addEventListener("click", (e) => {
  populateProjectDropdown();
  taskFormDiv.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

content.appendChild(wrapDiv);
content.appendChild(formDiv);
content.appendChild(taskFormDiv);
wrapper.appendChild(footer);
wrapper.appendChild(projectDiv);
wrapper.appendChild(itemDiv);
wrapper.appendChild(addTask);
wrapDiv.appendChild(navDiv);
wrapDiv.appendChild(wrapper);

export { wrapDiv, itemDiv, saveProjectsToLocalStorage };
