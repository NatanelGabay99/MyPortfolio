import { createGameImageArray } from "./cards.js";

const grid = document.getElementById("grid-container");


let card1 = null;
function flip(event) {
  const card = event.currentTarget; //div
  card.classList.toggle("flip");

  if (card1 == null) {
    console.log("1st time");
    card1 = card;
  } else {
    console.log("2nd time");
    //check for match!
    if (card1.dataset.id == card.dataset.id) {
      card.removeEventListener("click", flip);
      card1.removeEventListener("click", flip);
      card1 = null;
    } else {
      setTimeout(() => {
        card.classList.remove("flip");
        card1.classList.remove("flip");
        card1 = null;
      }, 1000);
    }
  }
}

const images = createGameImageArray(16);
images.forEach(s => {
  const div = document.createElement("div");
  div.classList.add("card");
  div.addEventListener("click", flip);
  const back = document.createElement("img");
  back.classList.add("back");
  back.src = "./images/mlb_logo.webp";
  back.alt = "card-back";

  const front = document.createElement("img");
  front.classList.add("front");
  front.src = s;
  front.alt = s.replace("../images", "").replace(".jpg", "");

  div.setAttribute("data-id", front.alt);
  div.appendChild(back);
  div.appendChild(front);

  grid.appendChild(div);

});

 
/* if(level === 1){
  game(images);
} else if(level === 2){
  game(images2);
} else if(level === 3){
  game(images3);
} else if(level === 4){
  game(images4);
} */

/* const images2 = createGameImageArray(12);
const images3 = createGameImageArray(16);
const images4 = createGameImageArray(20);
 */

