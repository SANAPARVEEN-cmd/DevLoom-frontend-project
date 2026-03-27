document.addEventListener("DOMContentLoaded", () => {

  const themeBtn = document.getElementById("themeToggle");
  if (!themeBtn) return;

  const THEME_KEY = "theme";

  // Apply saved theme
  let savedTheme = localStorage.getItem(THEME_KEY) || "dark";
  document.body.classList.add(savedTheme);

  // Set icon
  themeBtn.textContent = savedTheme === "light" ? "☀️" : "🌙";

  // Toggle theme
  themeBtn.addEventListener("click", () => {
    if (document.body.classList.contains("light")) {
      document.body.classList.replace("light", "dark");
      localStorage.setItem(THEME_KEY, "dark");
      themeBtn.textContent = "🌙";
    } else {
      document.body.classList.replace("dark", "light");
      localStorage.setItem(THEME_KEY, "light");
      themeBtn.textContent = "☀️";
    }
  });

});