console.clear();

const app = (() => {
  let body;
  let menu;
  let menuItems;

  const init = () => {
    body = document.querySelector("div");
    menu = document.querySelector(".menu-icon");
    menuItems = document.querySelectorAll(".nav__list-item");
    applyListeners();
  };

  const applyListeners = () => {
    menu.addEventListener("click", () => toggleClass(body, "nav-active"));
    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener("click", () =>
        toggleClass(body, "nav-active")
      );
    }
  };

  const toggleClass = (element, stringClass) => {
    if (element.classList.contains(stringClass))
      element.classList.remove(stringClass);
    else element.classList.add(stringClass);
  };

  init();
})();
