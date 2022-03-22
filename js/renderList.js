import createCard from "./createCard.js"

export default function renderList(houses) {
  const cards = document.querySelector(".cards")

  houses.forEach((house) => cards.appendChild(createCard(house)))
}
