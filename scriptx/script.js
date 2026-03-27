document.addEventListener("DOMContentLoaded", () => {

  // ================= ELEMENTS =================
  const dashboard = document.getElementById("dashboard");
  const cards = document.getElementById("cards");
  const announcements = document.getElementById("announcements");
  const welcome = document.getElementById("welcome");
  const loginBtn = document.getElementById("loginBtn");

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

  const renderDashboard = () => {
    if (!dashboard) return;

    dashboard.innerHTML = "";

    dashboardData.forEach(item => {
      const div = document.createElement("div");
      div.className = "widget";
      div.innerHTML = `<h3>${item.title}</h3><p>0</p>`;
      dashboard.appendChild(div);

      animateValue(div.querySelector("p"), 0, item.value, 1000);
    });
  };

  const renderCards = () => {
    if (!cards) return;

    cards.innerHTML = "";

    cardsData.forEach(c => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `<h3>${c.title}</h3><p>${c.desc}</p>`;
      cards.appendChild(div);
    });
  };

  const renderAnnouncements = () => {
    if (!announcements) return;

    announcements.innerHTML = "";

    announcementsData.forEach(a => {
      const p = document.createElement("p");
      p.textContent = a;
      announcements.appendChild(p);
    });
  };

  const updateUser = () => {
    if (!welcome) return;

    const user = localStorage.getItem("user");
    welcome.textContent = user
      ? `Welcome, ${user} 👋`
      : "Welcome, Guest 👋";
  };

  // Login simulation
  if (loginBtn) {
    loginBtn.onclick = () => {
      const user = localStorage.getItem("user");

      if (user) {
        localStorage.removeItem("user");
      } else {
        localStorage.setItem("user", "DevUser");
      }

      updateUser();
    };
  }

  // ================= INITIAL RENDER =================
  updateUser();
  renderDashboard();
  renderCards();
  renderAnnouncements();

});