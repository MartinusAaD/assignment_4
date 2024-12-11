// Document Queries / Create elements
const toastComponentContainer = document.querySelector(".component__toast");
const toastButton = document.createElement("button");
const toastContainer = document.createElement("div");

// Applying classes
toastButton.classList.add("toast__button");
toastContainer.classList.add("toast__container");

// Appending to index.html
toastComponentContainer.append(toastButton, toastContainer);

// Adding text
toastButton.textContent = "Send Message";
toastContainer.textContent = "Toast - Message Sent";

// Toast function
toastButton.addEventListener("click", () => {
  toastContainer.classList.add("toast__container-show");

  setTimeout(() => {
    toastContainer.classList.remove("toast__container-show");
  }, 3000);
});
