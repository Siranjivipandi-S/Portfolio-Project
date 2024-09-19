const changeMode = document.getElementById("changemode");

const modeIcon = document.getElementById("modeicon");
const container = document.querySelector(".container"); // Selects the first element with the class 'container'
const contactcontainer = document.querySelector(".wrap-contact"); // Selects the first element with the class 'container'

changeMode.addEventListener("click", () => {
  container.classList.toggle("dark");
  contactcontainer.classList.toggle("dark");
  if (modeIcon.classList.contains("fa-moon")) {
    modeIcon.classList.replace("fa-moon", "fa-sun"); // Switch to sun icon
  } else {
    modeIcon.classList.replace("fa-sun", "fa-moon"); // Switch back to moon icon
  }
});

// JavaScript for toggling the navigation menu
document
  .getElementById("hamburger-menu")
  .addEventListener("click", function () {
    document.body.classList.toggle("nav-active");
  });
