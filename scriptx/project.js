// ================= PROJECT DATA =================
let projects = JSON.parse(localStorage.getItem("projects")) || [
  { name: "Frontend Revamp", description: "Redesign dashboard UI for better UX." },
  { name: "Backend API", description: "Develop REST API for project management." },
  { name: "AI Tool Integration", description: "Integrate GPT-powered tools." }
];

const projectContainer = document.getElementById("projectCards");

// ================= ADD PROJECT BUTTON =================
const addBtn = document.createElement("button");
addBtn.textContent = "+ Add Project";
addBtn.className = "add-project-btn";
document.querySelector(".main").insertBefore(addBtn, projectContainer);

addBtn.addEventListener("click", () => {
  const name = prompt("Enter project name:");
  if (!name?.trim()) return;

  const desc = prompt("Enter project description:");
  if (!desc?.trim()) return;

  projects.unshift({ name: name.trim(), description: desc.trim() });
  saveProjects();
  renderProjects();
});

// ================= SAVE =================
function saveProjects() {
  localStorage.setItem("projects", JSON.stringify(projects));
}

// ================= RENDER =================
function renderProjects() {
  projectContainer.innerHTML = "";

  projects.forEach((p, idx) => {
    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <div class="card-actions">
        <button class="update-btn" data-idx="${idx}">Update</button>
        <button class="delete-btn" data-idx="${idx}">Delete</button>
      </div>
    `;

    projectContainer.appendChild(card);
  });
}

// ================= EVENT DELEGATION =================
projectContainer.addEventListener("click", (e) => {
  const idx = e.target.dataset.idx;
  if (e.target.classList.contains("update-btn")) {
    const project = projects[idx];
    const newName = prompt("Update project name:", project.name);
    if (!newName?.trim()) return;

    const newDesc = prompt("Update project description:", project.description);
    if (!newDesc?.trim()) return;

    projects[idx] = { name: newName.trim(), description: newDesc.trim() };
    saveProjects();
    renderProjects();
  }

  if (e.target.classList.contains("delete-btn")) {
    if (!confirm("Delete this project?")) return;

    const card = e.target.closest(".project-card");
    card.classList.add("fade-out");

    setTimeout(() => {
      projects.splice(idx, 1);
      saveProjects();
      renderProjects();
    }, 300);
  }
});

// ================= INITIAL LOAD =================
renderProjects();