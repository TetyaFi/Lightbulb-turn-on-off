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

let color = document.getElementById("colorPicker").value;
console.log(color);

function changeColor(ev) {
  document.querySelector(".active").style.background =
    "radial-gradient(circle, white 0%, " + ev.target.value + "60%, black 100%)";
}

document.querySelector("colorPicker").onchange = changeColor;
