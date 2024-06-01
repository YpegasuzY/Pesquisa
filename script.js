const frameworksButton = document.getElementById("frameworks");
const subMenu = document.querySelector(".subMenu");

frameworksButton.addEventListener("click", () => {
  subMenu.classList.toggle("active");

  if (subMenu.classList.contains("active")) {
    subMenu.style.animation = "slideDown 0.5s ease-in-out";
  } else {
    subMenu.style.animation = "";
  }
});


window.revelar = ScrollReveal({reset:true});

revelar.reveal('.efeito-img-topo', {
    duration: 3000,
    distance: '150px',
    origin: 'right'
});

revelar.reveal('.efeito-sessao1', {
  duration: 2000,
  distance: '100px',
});

revelar.reveal('.div1', {
  duration: 2000,
  distance: '100px',
  origin: 'right'
});

revelar.reveal('.div2', {
  duration: 2000,
  distance: '100px',
  origin: 'left'
});

