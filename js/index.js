import { games } from "./script.js";

const handleClick = (event) => {
  event.target.classList.toggle("played");
}

const addPlayed = () => {
  const name = document.querySelectorAll("h2");

  name.forEach((result) => {
    result.addEventListener("click", handleClick);
  });
}

const createList = () => {
  const resultContainer = document.querySelector(".result-container");

  games.forEach((result) => {

    resultContainer.innerHTML += `
      <div class="result">
      <h2>${result.name}</h2>
      <p>${result.rating}</p>
      </div>
    `;
  });

  addPlayed();
};

createList();



