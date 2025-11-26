// DARK/LIGHT THEME
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("theme-toggle");

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }

  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.removeItem("theme");
    }
  });
});

// FADE-IN ANIMATIONS
const observers = document.querySelectorAll(".fade-in");
observers.forEach(el => {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  });
  io.observe(el);
});

// SIMPLE SEARCH (Playlist pages)
document.addEventListener("input", (event) => {
  if (event.target.matches("#searchInput, #searchHajj")) {
    const q = event.target.value.toLowerCase();
    const tiles = document.querySelectorAll(".video-tile");

    tiles.forEach(tile => {
      tile.style.display = tile.innerText.toLowerCase().includes(q) ? "" : "none";
    });
  }
});
