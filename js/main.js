import { moveMouse } from "./moveMouse.js";
import { animateLeaves, resetLeaves } from "./animations.js";

const categoryCards = document.querySelectorAll(".categories__card");
const greenLeafEl = document.querySelector(".decor-green");
const brownLeafEl = document.querySelector(".decor-brown");

document.addEventListener("mousemove", (e) => moveMouse(e));

categoryCards.forEach((card, index) => {
  card.addEventListener("mouseenter", () => animateLeaves(greenLeafEl, brownLeafEl, index));
  card.addEventListener("mouseleave", () => resetLeaves(greenLeafEl, brownLeafEl));
});
