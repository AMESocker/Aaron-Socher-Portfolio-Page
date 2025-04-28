document.getElementById('aboutNav').addEventListener("click", about);
document.getElementById('appNav').addEventListener("click", appShow);
document.getElementById('skillsNav').addEventListener("click", skills);
const aboutSection = document.getElementById("aboutSection");
const skillsSection = document.getElementById("skillsSection");
const applications = document.getElementById("applications");
function about() {
  console.log('about')
  aboutSection.setAttribute("style", "display: flex");
  applications.setAttribute("style", "display: none");
  skillsSection.setAttribute("style", "display: none");
  //if screen is less than 768px, hide #Introduction
  if (window.innerWidth < 768) {
    document.getElementById('Introduction').setAttribute("style", "display: flex");
  }
}
function appShow() {
  console.log('apps')
  applications.setAttribute("style", "display: flex");
  aboutSection.setAttribute("style", "display: none");
  skillsSection.setAttribute("style", "display: none");
  if (window.innerWidth < 768) {
    document.getElementById('Introduction').setAttribute("style", "display: none");
  }else{
    document.getElementById('Introduction').setAttribute("style", "display: flex");
  }
}
function skills() {
  console.log('skills')
  skillsSection.setAttribute("style", "display: flex");
  applications.setAttribute("style", "display: none");
  aboutSection.setAttribute("style", "display: none");
  if (window.innerWidth < 768) {
    document.getElementById('Introduction').setAttribute("style", "display: none");
  }else{
    document.getElementById('Introduction').setAttribute("style", "display: flex");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("#navbarNav .nav-link");

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      // Remove active class from all links
      document.querySelector("#navbarNav .nav-link.active")?.classList.remove("active");

      // Add active class to the clicked link
      this.classList.add("active");
    });
  });

  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

});
//Skills Highlight
document.querySelectorAll("#skillsIcons i").forEach(icon => {
  icon.addEventListener("mouseenter", () => {
      let skill = icon.getAttribute("data-skill");
      document.querySelectorAll(`#skillsList item[data-skill="${skill}"]`).forEach(li => {
          li.classList.add("highlight");
      });
  });

  icon.addEventListener("mouseleave", () => {
      document.querySelectorAll("#skillsList item").forEach(li => {
          li.classList.remove("highlight");
      });
  });
});



//dark mode
const toggleButton = document.getElementById("dark-mode-toggle");
const body = document.body;

// Check local storage for theme preference
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  aboutSection.classList.add("dark-mode");
}

// Toggle dark mode
toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  aboutSection.classList.toggle("dark-mode");
  
  // Save user preference
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    toggleButton.textContent = "☀️ Light Mode";
  } else {
    localStorage.setItem("theme", "light");
    toggleButton.textContent = "🌙 Dark Mode";
  }
});

window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    document.getElementById("dark-mode-toggle").textContent = "☀️ Light Mode";
  }
});
