import houseToRent from "./houseToRent.js"
import renderList from "./renderList.js"

renderList(houseToRent)

const select = document.querySelector(".select")

select.addEventListener("change", (e) => {
  const houseType = e.target.value

  const houseFiltered = houseToRent.filter(
    (house) => house.type === houseType || houseType === "All"
  )

  renderList(houseFiltered)
})

const checkBox = document.querySelector(".available-checkbox")

checkBox.addEventListener("change", (e) => {
  const isChecked = e.target.checked

  const houseFiltered = houseToRent.filter(
    (house) => house.available === isChecked
  )

  renderList(houseFiltered)
})

const searchInput = document.querySelector(".search-input")

searchInput.addEventListener("keyup", (e) => {
  const textInput = e.target.value

  const regex = new RegExp(textInput, "i")

  const houseFiltered = houseToRent.filter(
    (house) => house.name.search(regex) >= 0
  )

  renderList(houseFiltered)
})
