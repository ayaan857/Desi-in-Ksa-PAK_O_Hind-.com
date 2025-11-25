/* ------------------------------------------------------
   THEME (LIGHT / DARK MODE TOGGLE)
------------------------------------------------------ */

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
}

// Toggle theme when button is clicked
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("theme-toggle");

    if (toggle) {
        toggle.addEventListener("click", () => {
            const currentTheme = document.documentElement.getAttribute("data-theme");
            const newTheme = currentTheme === "dark" ? "light" : "dark";

            document.documentElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("theme", newTheme);
        });
    }
});



/* ------------------------------------------------------
   LANGUAGE DIRECTION TOGGLE (RTL / LTR)
------------------------------------------------------ */

document.addEventListener("DOMContentLoaded", () => {
    const langToggle = document.getElementById("lang-toggle");

    if (langToggle) {
        langToggle.addEventListener("click", () => {
            const htmlTag = document.documentElement;
            const currentDir = htmlTag.getAttribute("dir");
            const newDir = currentDir === "rtl" ? "ltr" : "rtl";

            htmlTag.setAttribute("dir", newDir);
        });
    }
});



/* ------------------------------------------------------
   FADE-IN ON SCROLL
------------------------------------------------------ */

const fadeElements = document.querySelectorAll(".fade-in");

const appearOptions = {
    threshold: 0.3,
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

fadeElements.forEach(el => {
    appearOnScroll.observe(el);
});



/* ------------------------------------------------------
   SEARCH FILTER ON PLAYLIST PAGE
------------------------------------------------------ */

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const videoTiles = document.querySelectorAll(".video-tile");

    if (searchInput && videoTiles.length > 0) {
        searchInput.addEventListener("keyup", () => {
            const searchValue = searchInput.value.toLowerCase();

            videoTiles.forEach(tile => {
                const text = tile.innerText.toLowerCase();
                tile.style.display = text.includes(searchValue) ? "" : "none";
            });
        });
    }
});
