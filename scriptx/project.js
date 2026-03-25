
// ================= APPLY SAVED THEME =================
const savedTheme = localStorage.getItem("theme");

if(savedTheme === "light"){
  document.body.classList.add("light");
} else {
  document.body.classList.add("dark");
}

// ================= SAMPLE PROJECT DATA =================
let projects = [
  { name: "Frontend Revamp", description: "Redesign dashboard UI for better UX." },
  { name: "Backend API", description: "Develop REST API for project management." },
  { name: "AI Tool Integration", description: "Integrate GPT-powered tools." }
];

const projectContainer = document.getElementById("projectCards");

// ================= ADD PROJECT BUTTON =================
const addBtn = document.createElement("button");
addBtn.textContent = "Add Project";
addBtn.className = "add-project-btn";
addBtn.onclick = () => {
  const name = prompt("Enter project name:");
  const desc = prompt("Enter project description:");
  if(name && desc){
    projects.push({ name, description: desc });
    renderProjects();
  }
};

// Add button at top of main content
document.querySelector(".main").prepend(addBtn);

// ================= RENDER PROJECTS =================
function renderProjects() {
  projectContainer.innerHTML = "";
  projects.forEach((p, index) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <div>
        <button class="update-btn" onclick="updateProject(${index})">Update</button>
        <button class="delete-btn" onclick="removeProject(${index})">Delete</button>
      </div>
    `;
    projectContainer.appendChild(card);
  });
}

// ================= DELETE PROJECT =================
function removeProject(index) {
  projects.splice(index, 1);
  renderProjects();
}

// ================= UPDATE PROJECT =================
function updateProject(index) {
  const name = prompt("Update project name:", projects[index].name);
  const desc = prompt("Update project description:", projects[index].description);
  if(name && desc){
    projects[index].name = name;
    projects[index].description = desc;
    renderProjects();
  }
}

// ================= INITIAL RENDER =================
renderProjects();

// ================= THEME TOGGLE =================
// ================= THEME TOGGLE =================
const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {
  if (document.body.classList.contains("light")) {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark"); // SAVE
  } else {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    localStorage.setItem("theme", "light"); // SAVE
  }
});