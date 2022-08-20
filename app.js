const bulb = document.getElementById("lightbulb");
function turnLightOnOff() {
  if (bulb.src.match("lightoff")) {
    bulb.src = "lighton.jpg";
  } else {
    bulb.src = "lightoff.jpg";
  }
}

const lightbulb = document.querySelector("#container");

bulb.addEventListener("click", () => {
  lightbulb.classList.toggle("active");
});
