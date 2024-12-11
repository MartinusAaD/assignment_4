const dropdownListArray = ["Element 1", "Element 2", "Element 3"];

// Document Queries / Create elements
const dropdownComponentContainer = document.querySelector(
  ".component__dropdown"
);
const dropdownButton = document.createElement("button");
const dropdownUl = document.createElement("ul");

// Applying Classes
dropdownButton.classList.add("dropdown__button");
dropdownUl.classList.add("dropdown__list");

// Appending
dropdownComponentContainer.append(dropdownButton, dropdownUl);

// Applying Text
dropdownButton.textContent = "Dropdown Button";

for (let i = 0; i < dropdownListArray.length; i++) {
  const dropdownListElement = document.createElement("li");
  const dropdownListLink = document.createElement("a");
  dropdownListElement.classList.add("dropdown__list-element");
  dropdownListLink.classList.add("dropdown__list-element-link");
  dropdownUl.append(dropdownListElement);
  dropdownListElement.append(dropdownListLink);
  dropdownListLink.textContent = dropdownListArray[i];
  dropdownListLink.href = "#";
}

// Dropdown Function
dropdownButton.addEventListener("click", () => {
  dropdownUl.classList.toggle("show");
  // Toggle visibility of the dropdown menu
  dropdownUl.style.display =
    dropdownUl.style.display === "flex" ? "none" : "flex";
});
