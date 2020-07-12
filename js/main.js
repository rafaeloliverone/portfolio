const menuToogle = document.querySelector(".menu-toogle");
const container = document.querySelector(".container");

menuToogle.addEventListener("click", () => {
    container.classList.toggle('on'); 
})