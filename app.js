const lightbulb = document.querySelector(".container");

const toggleSwitch = document.getElementById("switch");

const colorpicker = document.getElementById("colorPicker");

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

colorpicker.addEventListener("input", function (e) {
  color = e.target.value;
  if (color === localStorage.getItem("bgColor")) return;
  localStorage.setItem("bgColor", color);
  lightbulb.style.backgroundColor = colorpicker.value;
  lightbulb.classList.toggle("active");
});
