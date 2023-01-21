import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");
  const numbersArray = [1, 3, 4, 5, 6, 7];

  numbersArray
    .filter((num) => num % 2 === 0)
    .map((num) => {
      let li = document.createElement("li");
      li.innerHTML = num;
      ul.appendChild(li);
    });
});
