const footerListElementsArray = [
  {
    title: "Social Media 1",
    icon: "../src/assets/icons/facebook.svg",
    href: "#",
    alt: "Social Media 1",
  },
  {
    title: "Social Media 2",
    icon: "../src/assets/icons/instagram.svg",
    href: "#",
    alt: "Social Media 2",
  },

  {
    title: "Social Media 3",
    icon: "../src/assets/icons/tiktok.svg",
    href: "#",
    alt: "Social Media 3",
  },
  {
    title: "Social Media 4",
    icon: "../src/assets/icons/x.svg",
    href: "#",
    alt: "Social Media 4",
  },
];

// Document queries / Create elements
const footerContainer = document.querySelector("footer");
const footer = document.createElement("div");
const footerLinksContainer = document.createElement("div");
const copyright = document.createElement("p");

// Class declaration
footer.classList.add("footer-container");
footerLinksContainer.classList.add("footer__links-container");

// Appending
footerContainer.append(footer);
footer.append(footerLinksContainer);

// Adding links with images
for (let i = 0; i < footerListElementsArray.length; i++) {
  const footerLink = document.createElement("a");
  const footerImage = document.createElement("img");

  footerLinksContainer.append(footerLink);
  footerLink.append(footerImage);
  footerLink.href = footerListElementsArray[i].href;
  footerImage.src = footerListElementsArray[i].icon;
  footerImage.alt = footerListElementsArray[i].alt;

  // Apply Classes
  footerLink.classList.add("footer__link");
  footerImage.classList.add("footer__image");
}

// Copyright
footer.append(copyright);
copyright.classList.add("footer__copyright");
copyright.innerHTML = "Copyright &copy; Message";
