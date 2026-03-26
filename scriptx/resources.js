// ================= THEME =================
const themeBtn = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light");
} else {
  document.body.classList.add("dark");
}

themeBtn.addEventListener("click", () => {
  if (document.body.classList.contains("light")) {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    localStorage.setItem("theme", "light");
  }
});

// ================= DATA =================
let resources = JSON.parse(localStorage.getItem("resources")) || [
  { title: "HTML Crash Course", link: "https://developer.mozilla.org" },
  { title: "CSS Flexbox Guide", link: "https://css-tricks.com" },
  { title: "JavaScript Basics", link: "https://javascript.info" }
];

const container = document.getElementById("resourceCards");

// ================= ADD BUTTON =================
const addBtn = document.createElement("button");
addBtn.textContent = "+ Add Resource";
addBtn.className = "add-resource-btn";

document.querySelector(".main").prepend(addBtn);

addBtn.addEventListener("click", () => {
  const title = prompt("Enter resource title:");
  if (!title || title.trim() === "") return;

  const link = prompt("Enter resource link:");
  if (!link || link.trim() === "") return;

  resources.unshift({
    title: title.trim(),
    link: link.trim()
  });

  save();
  render();
});

// ================= SAVE =================
function save() {
  localStorage.setItem("resources", JSON.stringify(resources));
}

// ================= RENDER =================
function render() {
  container.innerHTML = "";

  resources.forEach((r, idx) => {
    const card = document.createElement("div");
    card.className = "resource-card";

   card.innerHTML = `
  <h3>${r.title}</h3>
  <p><a href="${r.link}" target="_blank">🔗 Visit Resource</a></p>
  <div class="card-actions">
    <button class="delete-btn">Delete</button>
  </div>
`;

    const deleteBtn = card.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", () => {
      if (!confirm("Delete this resource?")) return;

      resources.splice(idx, 1);
      save();
      render();
    });

    container.appendChild(card);
  });
}

// ================= INIT =================
render();