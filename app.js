let bulb = document.getElementById("lightbulb");
function turnLightOnOff() {
  if (bulb.src.match("lightoff")) {
    document.body.style.backgroundImage =
      "radial-gradient(white, white, orange)";
    bulb.src = "lighton.jpg";
  } else {
    document.body.style.backgroundImage = "radial-gradient(white, white)";
    bulb.src = "lightoff.jpg";
  }
}
