const buttons = document.querySelectorAll(".chose__section");
const carCells = document.querySelectorAll(".car__cell");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const filterName = button.dataset.filter;

    carCells.forEach((cell) => {
      cell.classList.remove("enable");
      cell.classList.add("disable");
    });

    const filteredElements = document.getElementsByName(filterName);
    filteredElements.forEach((element) => {
      element.classList.remove("disable");
      element.classList.add("enable");
    });
  });
});
