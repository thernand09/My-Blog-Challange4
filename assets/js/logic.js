const darkModeToggle = document.getElementById("dark-mode-toggle");

darkModeToggle.addEventListener("change", function() {
    if (this.checked) {
        // Dark mode is enabled
        document.body.classList.add("dark-mode");
    } else {
        // Dark mode is disabled
        document.body.classList.remove("dark-mode");
    }
});
// Check if dark mode preference is saved
const isDarkMode = localStorage.getItem("darkMode");

if (isDarkMode === "true") {
    document.body.classList.add("dark-mode");
    darkModeToggle.checked = true;
}