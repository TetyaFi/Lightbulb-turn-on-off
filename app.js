const lightbulb = document.querySelector(".container");

const toggleSwitch = document.getElementById("switch");

const bulb = document.getElementById("lightbulb");
function turnLightOnOff() {
  if (bulb.src.match("lightoff")) {
    bulb.src = "lighton.jpg";
  } else {
    bulb.src = "lightoff.jpg";
  }
}

toggleSwitch.addEventListener("click", () => {
  lightbulb.classList.toggle("active");
});
