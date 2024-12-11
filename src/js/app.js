const tabTitleButtons = document.querySelectorAll(".component__title");
const tabContents = document.querySelectorAll(".component-container");

tabTitleButtons.forEach((tabButton, index) => {
  tabButton.addEventListener("click", () => {
    tabTitleButtons.forEach((button) =>
      button.classList.remove("component__title--active")
    );
    tabContents.forEach((content) =>
      content.classList.remove("component-container--active")
    );

    tabButton.classList.add("component__title--active");
    tabContents[index].classList.add("component-container--active");
  });
});
