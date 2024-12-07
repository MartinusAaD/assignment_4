const listElementsArray = [
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

const header = document.querySelector(".component__navbar");

const navbar = document.createElement("nav");
const link = document.createElement("a");
const h1 = document.createElement("h1");
const list = document.createElement("ul");

navbar.classList.add("navbar");
link.classList.add("navbar__link");
h1.classList.add("navbar__header-link");
list.classList.add("navbar__list-links");

header.append(navbar);
navbar.append(link, list);
link.append(h1);

link.href = "#";
h1.textContent = "BrandName";

const links = 4;

// Adding links
for (let i = 0; i < links; i++) {
  const listElement = document.createElement("li");
  const link = document.createElement("a");
  list.append(listElement);
  listElement.append(link);
  link.textContent = listElementsArray[i].title;
  link.href = listElementsArray[i].href;

  // Apply Classes
  listElement.classList.add("navbar__list-element");
  link.classList.add("list-element__link");
}
