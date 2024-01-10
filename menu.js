window.onload = function () {
  window.scrollTo(0, 0);
};

const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu li a");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
  });
});

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
  document.querySelector("#disc1").addEventListener("mouseover", BlueClickHand);
  document.querySelector("#disc2").addEventListener("mouseover", BlueClickHand);
  document.querySelector("#disc3").addEventListener("mouseover", BlueClickHand);
  document.querySelector("#disc4").addEventListener("mouseover", BlueClickHand);
}

function BlueClickHand() {
  console.log("blueClickHand");
  this.classList.add("drej");
  this.addEventListener("animationend", redReset);
}

function redReset() {
  this.classList = "";
}

document.querySelector('a[href="#om-mig-sektion"]').addEventListener("click", function (e) {
  e.preventDefault(); // For at forhindre standard adfærd for linket

  // Rul ned til "Om mig"-sektionen med en animation over 500 ms
  document.querySelector("#om-mig-sektion").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector('a[href="#projekter-sektion"]').addEventListener("click", function (e) {
  e.preventDefault(); // For at forhindre standard adfærd for linket

  // Rul ned til "Om mig"-sektionen med en animation over 500 ms
  document.querySelector("#projekter-sektion").scrollIntoView({ behavior: "smooth", block: "start" });
});
