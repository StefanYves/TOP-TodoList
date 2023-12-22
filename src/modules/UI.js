import "../style.css";
import Project from "./Project";

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

const form = document.createElement("form");

form.classList.add("flex", "flex-col", "items-center", "justify-center");

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

form.appendChild(titleLabel);
form.appendChild(titleInput);

formDiv.appendChild(form);

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

  // Appending the new project title to the sidebar
  projectDiv.appendChild(projectWrap);

  // Hide the form after adding the project
  formDiv.classList.add("hidden");
  overlay.classList.add("hidden");
}

// Adding projects to the sidebar when the form is submitted
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission

  // Get the title input value
  const titleInputValue = titleInput.value;
  console.log(titleInputValue);

  // Create a new Project object with the title
  const newProject = new Project(titleInputValue);

  // Add the project to the sidebar
  addProjectToSidebar(newProject);
});

// Adding projects to the sidebar when the "Add Project" button is clicked
addProject.addEventListener("click", () => {
  formDiv.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

const btn = document.getElementById("btn").addEventListener("click", (e) => {
  const input = document.getElementById("input").value;
  const newProject = new Project(input);

  newProject.addTask("munca", "de facut munca", "12/15/2023");

  console.log(newProject);

  const newDiv = document.createElement("div");
  newDiv.addEventListener("click", (e) => {
    newDiv.classList.add("hidden", "task");
  });

  // Appending to sidebar
  const projectWrap = document.createElement("div");
  projectWrap.classList.add("mt-5", "ml-5", "text-center");

  projectDiv.appendChild(projectWrap);

  projectWrap.innerHTML = `
    <p>${newProject.name}</p>
`;
});

content.appendChild(wrapDiv);
content.appendChild(formDiv);
wrapper.appendChild(footer);
wrapper.appendChild(projectDiv);
wrapper.appendChild(itemDiv);
wrapDiv.appendChild(navDiv);
wrapDiv.appendChild(wrapper);

export { wrapDiv, itemDiv };
