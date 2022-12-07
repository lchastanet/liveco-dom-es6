import houseToRent from "./houseToRent.js";
import createCard from "./createCard.js";

const entryPoint = document.querySelector(".cards");

const filters = {
  checkbox: false,
  select: "All",
  inputText: "",
};

const generateList = () => {
  entryPoint.innerHTML = "";

  const list = houseToRent
    .filter((house) =>
      filters.checkbox ? house.available === filters.checkbox : true
    )
    .filter((house) =>
      filters.select === "All" ? true : house.type === filters.select
    )
    .filter((house) =>
      filters.inputText.length >= 3
        ? house.name.includes(filters.inputText)
        : true
    );

  for (const elem of list) {
    entryPoint.appendChild(createCard(elem));
  }
};

const checkbox = document.querySelector("#available");

checkbox.addEventListener("change", (event) => {
  filters.checkbox = event.target.checked;
  generateList();
  console.log(event.target);
});

const select = document.querySelector(".select");

select.addEventListener("change", (e) => {
  filters.select = e.target.value;
  generateList();
});

const inputText = document.querySelector(".search-input");

inputText.addEventListener("keyup", (e) => {
  filters.inputText = e.target.value;
  generateList();
});

generateList();
