const buttonContainer = document.querySelector(".component__button");
const button = document.createElement("button");
button.classList.add("button");
button.textContent = "Button";
buttonContainer.append(button);

// Styles
button.style.backgroundColor = "#3d82bd";
button.style.fontSize = "1rem";
button.style.color = "white";
button.style.borderRadius = "0.4rem";
button.style.border = "none";
button.style.cursor = "pointer";

// Mouse Down
button.addEventListener("mousedown", () => {
  button.style.backgroundColor = "red";
  button.style.color = "white";
});

// Mouse Up
button.addEventListener("mouseup", () => {
  button.style.backgroundColor = "#3d82bd";
  button.style.color = "white";
});

// Mouse Enter
button.addEventListener("mouseenter", () => {
  button.style.backgroundColor = "yellow";
  button.style.color = "black";
});

// Mouse Leave
button.addEventListener("mouseleave", () => {
  button.style.backgroundColor = "#3d82bd";
  button.style.color = "white";
});
