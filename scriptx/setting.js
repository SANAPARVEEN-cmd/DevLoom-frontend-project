// ================= SETTINGS JS =================

// Toggle dark mode via checkbox
const darkModeToggle = document.getElementById("darkmode");

if(localStorage.getItem("theme") === "light"){
  document.body.classList.add("light");
  darkModeToggle.checked = false;
} else {
  document.body.classList.add("dark");
  darkModeToggle.checked = true;
}

darkModeToggle.addEventListener("change", () => {
  if(darkModeToggle.checked){
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    localStorage.setItem("theme", "light");
  }
});

// Save button clicks
const saveButtons = document.querySelectorAll(".save-btn");
saveButtons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    const input = e.target.previousElementSibling;
    if(input){
      alert(`Saved: ${input.value || input.checked}`);
    }
  });
});