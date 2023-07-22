const links = document.querySelectorAll(".menu__link");
links.forEach((element) => {
    element.onclick = function (event) {
        event.preventDefault();
        let parentLink = element.closest("menu__item");
        let parentHasSubMenu = parentLink.querySelector(".sub__menu");
        if (parentHasSubMenu) {
            parentHasSubMenu.classList.toggle("menu_active");
            return false;
        } 
    }
})