const navbarListElementsArray = [
  {
    title: "Link 1",
    href: "#",
  },
  {
    title: "Link 2",
    href: "#",
  },

  {
    title: "Link 3",
    href: "#",
  },
  {
    title: "Link 4",
    href: "#",
  },
];

const navbarContainer = document.querySelector(".component__navbar");

const navbar = document.createElement("nav");
const navbarLink = document.createElement("a");
const navbarHeader = document.createElement("h1");
const navbarList = document.createElement("ul");

navbar.classList.add("navbar");
navbarLink.classList.add("navbar__link");
navbarHeader.classList.add("navbar__header-link");
navbarList.classList.add("navbar__list-links");

navbarContainer.append(navbar);
navbar.append(navbarLink, navbarList);
navbarLink.append(navbarHeader);

navbarLink.href = "#";
navbarHeader.textContent = "BrandName";

// Adding links
for (let i = 0; i < navbarListElementsArray.length; i++) {
  const listElement = document.createElement("li");
  const navbarLink = document.createElement("a");
  navbarList.append(listElement);
  listElement.append(navbarLink);
  navbarLink.textContent = navbarListElementsArray[i].title;
  navbarLink.href = navbarListElementsArray[i].href;

  // Apply Classes
  listElement.classList.add("navbar__list-element");
  navbarLink.classList.add("navbar__list-element-link");
}
