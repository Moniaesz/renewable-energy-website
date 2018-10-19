document.addEventListener("DOMContentLoaded", function() {

    const header = document.getElementsByTagName("header")[0];
    const menu = header.getElementsByClassName("menu")[0];
    const nav = header.querySelector("nav");
    function openMobile() {
        menu.classList.toggle("open");
        header.classList.toggle("show-menu");
        nav.classList.toggle("show-nav");
    }

    menu.addEventListener("click", function() {
        openMobile();
    });
});
