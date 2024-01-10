document.getElementById("rotating-container").addEventListener("mouseover", function () {
  this.classList.add("rotated");
});

document.getElementById("rotating-container").addEventListener("mouseout", function () {
  this.classList.remove("rotated");
});
