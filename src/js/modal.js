// Document Queries / Create elements
const modalComponentContainer = document.querySelector(".component__modal");
const modalButton = document.createElement("button");
const modalButtonClose = document.createElement("button");
const modalContainer = document.createElement("div");
const modalContent = document.createElement("div");
const modalSpan = document.createElement("span");

// Applying classes
modalButton.classList.add("modal__button");
modalButtonClose.classList.add("modal__button-close");
modalContainer.classList.add("modal__container");
modalContent.classList.add("modal__content");
modalSpan.classList.add("modal__span");

// Appending to index.html
modalComponentContainer.append(modalButton, modalContainer);
modalContainer.append(modalContent);
modalContent.append(modalSpan, modalButtonClose);

// Adding text
modalButton.textContent = "Send Message";
modalSpan.textContent = "Modal - Message PopUp";
modalButtonClose.textContent = "Close";

// Show modal on button click
modalButton.addEventListener("click", () => {
  modalContainer.classList.add("modal__container-show");
});

// Hide modal on close button click
modalButtonClose.addEventListener("click", () => {
  modalContainer.classList.remove("modal__container-show");
});

// Below, help from chatGPT
// Hide modal when clicking outside the modal content
modalContainer.addEventListener("click", (event) => {
  if (event.target === modalContainer) {
    modalContainer.classList.remove("modal__container-show");
  }
});
