let ratioWidth = document.getElementById("ration-width")
let ratioHeight = document.getElementById("ration-height")
let width = document.getElementById("width")
let height = document.getElementById("height")

let calculateWidth = () => {
  let aspectRation = ratioWidth.value / ratioHeight.value
  width.value = parseFloat((height.value * aspectRation).toFixed(2))
}

let calculateHeight = () => {
  let aspectRation = ratioWidth.value / ratioHeight.value
  height.value = parseFloat((width.value / aspectRation).toFixed(2))
}

height.addEventListener("input", calculateWidth)
width.addEventListener("input", calculateHeight)
ratioHeight.addEventListener("input", calculateWidth)
ratioWidth.addEventListener("input", calculateHeight)
