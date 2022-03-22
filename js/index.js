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
