function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

    window.addEventListener("load", () => {
    const yearElement = document.getElementById("year")
    const currentYear = new Date().getFullYear()
    yearElement.textContent = currentYear;
});  