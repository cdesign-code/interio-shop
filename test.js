const hamburgerMenu=document.querySelector(".hamburger-menu");
const navi=document.getElementById("hamburger-navigation");
const hamburgerMenuSection =document.querySelectorAll(".humberger-menu-section")

hamburgerMenu.addEventListener("click", function () {
    hamburgerMenu.classList.toggle("active");
    navi.classList.toggle('active');
  });

  humbergerMenuSections.forEach((humbergerMenuSection) => {
    console.log(humbergerMenuSection);
  });
  humbergerMenuSection.addEventListener("click", function () {
    hamburgerMenu.classList.remove("active");
    navi.classList.remove("active");
  });
