document.addEventListener("DOMContentLoaded", () => {
  // ================= APPLY SAVED THEME =================
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light");
  } else {
    document.body.classList.add("dark");
  }

  // ================= ELEMENTS =================
  const dashboard = document.getElementById("dashboard");
  const cards = document.getElementById("cards");
  const announcements = document.getElementById("announcements");
  const welcome = document.getElementById("welcome");
  const loginBtn = document.getElementById("loginBtn");
  const themeBtn = document.getElementById("themeToggle");

  // ================= DATA =================
  const dashboardData = [
    { title: "Projects", value: 24 },
    { title: "Tasks", value: 58 },
    { title: "Messages", value: 12 }
  ];

  const cardsData = [
    { title: "Frontend", desc: "Build responsive UIs" },
    { title: "Backend", desc: "APIs & databases" },
    { title: "DevOps", desc: "Deploy & scale apps" },
    { title: "AI Tools", desc: "Smart automation" }
  ];

  const announcementsData = [
    "🚀 New dashboard released",
    "🔥 50+ new tutorials added",
    "🎯 Community challenge live"
  ];

  // ================= FUNCTIONS =================

  // Animated Counter
  const animateValue = (el, start, end, duration) => {
    let startTime = null;
    const step = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      el.textContent = Math.floor(progress * (end - start) + start);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  // Render Dashboard
  const renderDashboard = () => {
    dashboard.innerHTML = "";
    dashboardData.forEach(item => {
      const div = document.createElement("div");
      div.className = "widget";
      div.innerHTML = `<h3>${item.title}</h3><p>0</p>`;
      dashboard.appendChild(div);
      animateValue(div.querySelector("p"), 0, item.value, 1000);
    });
  };

  // Render Cards
  const renderCards = () => {
    cards.innerHTML = "";
    cardsData.forEach(c => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `<h3>${c.title}</h3><p>${c.desc}</p>`;
      cards.appendChild(div);
    });
  };

  // Render Announcements
  const renderAnnouncements = () => {
    announcements.innerHTML = "";
    announcementsData.forEach(a => {
      const p = document.createElement("p");
      p.textContent = a;
      announcements.appendChild(p);
    });
  };

  // Update User Greeting
  const updateUser = () => {
    const user = localStorage.getItem("user");
    welcome.textContent = user ? `Welcome, ${user} 👋` : "Welcome, Guest 👋";
  };

  // Toggle Login Simulation
  loginBtn.onclick = () => {
    const user = localStorage.getItem("user");
    if (user) {
      localStorage.removeItem("user");
    } else {
      localStorage.setItem("user", "DevUser");
    }
    updateUser();
  };

  // Theme Toggle
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

  // ================= INITIAL RENDER =================
  updateUser();
  renderDashboard();
  renderCards();
  renderAnnouncements();
});