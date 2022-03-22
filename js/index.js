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
