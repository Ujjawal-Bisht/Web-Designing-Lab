// script.js

const themeToggleButton = document.getElementById("theme-toggle");
const rootElement = document.documentElement;

// Load saved theme or default to light
const savedTheme = localStorage.getItem("theme") || "light";
rootElement.setAttribute("data-theme", savedTheme);
themeToggleButton.textContent =
  savedTheme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode";

// Toggle theme on button click
themeToggleButton.addEventListener("click", () => {
  const currentTheme = rootElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  rootElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  themeToggleButton.textContent =
    newTheme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode";
});
