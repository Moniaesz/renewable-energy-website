document.addEventListener("DOMContentLoaded", function() {

    const header = document.getElementsByTagName("header")[0];
    const menu = header.getElementsByClassName("menu")[0];
    function openMobile() {
        menu.classList.toggle("open");
    }

    menu.addEventListener("click", function() {
        openMobile();
    });
});