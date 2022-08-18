function turnLight() {
  let bulb = document.getElementById("lightbulb");
  if (bulb.src.match("lightoff")) {
    document.body.style.backgroundColor = "yellow";
    bulb.src = "lighton.jpg";
  } else {
    document.body.style.backgroundColor = "white";
    bulb.src = "lightoff.jpg";
  }
}
