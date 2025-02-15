document.getElementById('aboutNav').addEventListener("click", about);
document.getElementById('appNav').addEventListener("click", appShow);
document.getElementById('skillsNav').addEventListener("click", skills);
function about() {
  console.log('about')
  aboutSection.setAttribute("style", "display: flex");
  applications.setAttribute("style", "display: none");
  skillsSection.setAttribute("style", "display: none");
  //if screen is less than 768px, hide #Introduction
  if (window.innerWidth < 768) {
    document.getElementById('Introduction').setAttribute("style", "display: flex");
  }else{
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
//dark mode
const darkMode = document.getElementById('darkMode');
const body = document.body;
darkMode.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    darkMode.innerHTML = 'Light Mode';
  } else {
    darkMode.innerHTML = 'Dark Mode';
  }
});
