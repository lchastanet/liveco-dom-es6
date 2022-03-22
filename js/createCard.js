export default function createCard(house) {
  const { name, desc, img } = house

  const card = document.createElement("div")
  const cardHeader = document.createElement("div")
  const cardImg = document.createElement("div")
  const cardBody = document.createElement("div")
  const cardTitle = document.createElement("h2")
  const cardDescription = document.createElement("p")
  const cardButton = document.createElement("button")

  card.classList.add("card")

  cardHeader.classList.add("card-header")

  cardImg.classList.add("card-img")
  cardImg.style.backgroundImage = `url('${img}')`

  cardBody.classList.add("card-body")

  cardTitle.classList.add("card-title")
  cardTitle.textContent = name

  cardDescription.classList.add("card-description")
  cardDescription.textContent = desc

  cardButton.classList.add("card-button")
  cardButton.textContent = "I want it!"

  card.appendChild(cardHeader)
  card.appendChild(cardBody)
  cardHeader.appendChild(cardImg)
  cardBody.appendChild(cardTitle)
  cardBody.appendChild(cardDescription)
  cardBody.appendChild(cardButton)

  return card
}
