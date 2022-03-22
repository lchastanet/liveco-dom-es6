import createCard from "./createCard.js"
import { removeHtmlNodes } from "./utils.js"

export default function renderList(houses) {
  const cards = document.querySelector(".cards")

  removeHtmlNodes(cards)

  houses.forEach((house) => cards.appendChild(createCard(house)))
}
