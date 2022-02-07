openMenu = () => {
    let nav = document.getElementById("menu");
    let content = document.getElementById("content");
    let button = document.getElementById("button")
    let body = document.querySelector("body");

    nav.classList.toggle("nav__show");
    content.classList.toggle("nav__content");
    button.classList.toggle("btn__close");
    
    if (!nav.classList.contains("nav__show")) {
      // Disable scroll
      body.style.overflow = "auto";
    } else {
      body.style.overflow = "hidden";
    }
  }