// (() => {
//   let components = document.querySelectorAll("[data-component]");
//   console.log(components);
//   const renderComponent = async (comp) => {
//     console.log(comp);
//     try {
//       const { component } = comp.dataset;
//       const componentPath = `./components/${component}.html`;
//       const getComponent = await fetch(componentPath);
//       const convertToHTML = await getComponent.text();
//       comp.innerHTML = convertToHTML;
//     } catch (error) {
//       throw new Error("Failed to render component");
//     }
//   };
//   components.forEach(renderComponent);
// })();

const HeadersWithSubMenus = document.querySelectorAll(".header__has-sub-item");
const headerSubMenuItem = document.querySelectorAll(".header__sub-item li");
let currentlyOpenSubmenu = null;
HeadersWithSubMenus.forEach((header) => {
  const submenu = header.querySelector(".header__sub-item");
  header.addEventListener("click", () => {
    if (submenu) {
      if (submenu === currentlyOpenSubmenu) {
        // Clicking the same menu item; close the submenu
        submenu.classList.remove("header__sub-item_active");
        currentlyOpenSubmenu = null;
      } else {
        // Clicking a different menu item; close the currently open submenu (if any) and open the new one
        if (currentlyOpenSubmenu) {
          currentlyOpenSubmenu.classList.remove("header__sub-item_active");
        }
        submenu.classList.add("header__sub-item_active");
        currentlyOpenSubmenu = submenu;
      }
    }
  });
});
// Set Active link in header
const headerNavs = document.querySelectorAll(".header__item");
headerNavs.forEach((nav) => {
  if (nav.children[0].href === window.location.href) {
    nav.classList.add("header__item_active");
  }
});
headerSubMenuItem.forEach((item) => {
  if (item.children[0].href === window.location.href) {
    item.children[0].classList.toggle("greenBg");
  }
});
