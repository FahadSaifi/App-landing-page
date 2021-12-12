// sticky navigation bar:

let stick = () => {
    let navbar = document.querySelector("nav");
    if (window.scrollY > 0) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}
window.addEventListener('scroll', stick);

// Toggle Menu:

let menubtn = document.querySelector("#click");
let menu = document.querySelector("#toggle");
let close = document.querySelector("#close");

menubtn.addEventListener('click', () => {
    menu.classList.add('active');
    menubtn.classList.add('hide');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});
