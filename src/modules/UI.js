import "../style.css";

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
  "bg-red-950",
  "bg-opacity-80",
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
projectDiv.innerHTML = `
    <div class = "flex flex-col ml-5 mr-5 mt-5">
        <div class = "hover:bg-gray-300 text-center p-1 mb-5">
          <p>(SVG HERE)Today</p>
        </div>
        <div class = "hover:bg-gray-300 text-center p-1">
          <p>(SVG HERE)This Week</p>
        </div>
        <div class = "mt-5">
            <p class = "font-bold text-2xl">Projects</p>
            <div class = "hover:bg-gray-300 mt-5 text-center">
                <p>+ Add Project</p>
            </div>
        </div>
    </div>
`;

const itemDiv = document.createElement("div");
itemDiv.classList.add("w-full");

const footer = document.createElement("footer");
footer.innerHTML = `
<div class="flex justify-center items-center bg-red-950 opacity-80 fixed bottom-0 w-full">
<p class="text-xl text-white font-bold mb-2 mt-2">
  Copyright © 2023 stefanyves (GIT SVG)
</p>
<a href="https://github.com/StefanYves" class="ml-3 w-8 h-8 bg-github-img bg-cover">
</a>
</div>`;

content.appendChild(wrapDiv);
wrapper.appendChild(footer);
wrapper.appendChild(projectDiv);
wrapper.appendChild(itemDiv);
wrapDiv.appendChild(navDiv);
wrapDiv.appendChild(wrapper);

export { wrapDiv };
