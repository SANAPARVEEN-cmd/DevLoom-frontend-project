// ================= THEME TOGGLE =================
const themeBtn = document.getElementById("themeToggle");

// Apply saved theme
const savedTheme = localStorage.getItem("theme");
if(savedTheme){
  document.body.classList.add(savedTheme);
}else{
  document.body.classList.add("dark"); // default
}

// Toggle theme on click
themeBtn.addEventListener("click", () => {
  if(document.body.classList.contains("light")){
    document.body.classList.replace("light","dark");
    localStorage.setItem("theme","dark");
    themeBtn.textContent = "🌙"; // moon icon for dark
  } else {
    document.body.classList.replace("dark","light");
    localStorage.setItem("theme","light");
    themeBtn.textContent = "☀️"; // sun icon for light
  }
});

// Set button icon initially based on saved theme
if(document.body.classList.contains("light")){
  themeBtn.textContent = "☀️";
}else{
  themeBtn.textContent = "🌙";
}