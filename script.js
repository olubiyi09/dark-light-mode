const toggleDarkMode = document.querySelector(".toggle-dark");
const toggleTxt = document.querySelector(".txt");

let darkMode = localStorage.getItem("darkMode");

// Enable Dark Mode
const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  toggleTxt.textContent = "light";
  localStorage.setItem("darkMode", "enabled");
};

// Disable Dark Mode
const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  toggleTxt.textContent = "dark";
  localStorage.setItem("darkMode", null);
};

// Save DarkMode History
if (darkMode === "enabled") {
  enableDarkMode();
}

// Add Event Listener
toggleDarkMode.addEventListener("click", () => {
  let darkMode = localStorage.getItem("darkMode");

  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
