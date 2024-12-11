// Document Queries / Create elements
const alertComponentContainer = document.querySelector(".component__alert");
const alertButton = document.createElement("button");

// Applying Classes
alertButton.classList.add("alert__button");

// Appending
alertComponentContainer.append(alertButton);

// Applying Text
alertButton.textContent = "Do NOT click!";

// Alert Function
alertButton.addEventListener("click", () => {
  window.alert("This is an Alert Message!");
});
