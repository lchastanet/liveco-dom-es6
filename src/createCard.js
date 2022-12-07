export default function createCard({ name, img, desc }) {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");

  card.appendChild(cardHeader);

  const cardImg = document.createElement("div");
  cardImg.classList.add("card-img");
  cardImg.style.backgroundImage = `url('${img}')`;

  cardHeader.appendChild(cardImg);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  card.appendChild(cardBody);

  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = name;

  const cardDescription = document.createElement("p");
  cardDescription.classList.add("card-description");
  cardDescription.innerText = desc;

  const cardButton = document.createElement("button");
  cardButton.classList.add("card-button");
  cardButton.textContent = "I want it!";

  cardBody.append(cardTitle, cardDescription, cardButton);

  return card;
}
