document.addEventListener("DOMContentLoaded", () => {
    var toggleMenus = document.querySelectorAll(".toggle-menu");

    toggleMenus.forEach((toggleMenu) => {
        toggleMenu.addEventListener("click", () => {
            var parentColumn = toggleMenu.closest(".footer-columns");
            var menu = parentColumn.querySelector("ul.menu");
            menu.classList.toggle("active");
        });
    });
});