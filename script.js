
/* inicio logica de menu 1 */

document.querySelector(".menu-toggle-basic").addEventListener("click", () => {
    document.querySelector(".nav-basic").classList.toggle("active");
  });
  

/* inicio logica de menu 1 */

/* inicio logica de menu 2 */

document.querySelector(".menu-toggle-basic-2").addEventListener("click", () => {
    document.querySelector(".nav-basic-2").classList.toggle("active");
});


/* inicio logica de menu 2 */

/* inicio logica de menu 3 */

const toggle = document.querySelector(".menu-toggle-modern");
const nav = document.querySelector(".nav-modern");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  toggle.classList.toggle("active");
});


/* final logica de menu 3 */

/* inicio logica de menu 4 */


// Seleccionar elementos del menú 4
const menuToggle4 = document.querySelector(".menu-container-4 .menu-toggle-modern-4");
const nav4 = document.querySelector(".menu-container-4 .nav-modern-4");
// Seleccionar el botón "X" dentro del menú desplegable
const closeButton4 = document.querySelector(".menu-container-4 .close-menu-4");

// Alternar la clase "active" al hacer clic
menuToggle4.addEventListener("click", () => {
    menuToggle4.classList.toggle("active");
    nav4.classList.toggle("active");
});

// Agregar evento al botón "X" para cerrar el menú
closeButton4.addEventListener("click", () => {
    nav4.classList.remove("active");
    menuToggle4.classList.remove("active");
});


/* final logica de menu 4 */

/* inicio logica de menu 5 */

// Selección de elementos para el menú 5
const menuToggle5 = document.querySelector(".menu-toggle-modern-5");
const nav5 = document.querySelector(".nav-modern-5");

// Evento para alternar el menú desplegable
menuToggle5.addEventListener("click", () => {
    menuToggle5.classList.toggle("active");
    nav5.classList.toggle("active");
});

/* final logica de menu 5 */

