/* IMPORT // IMPORT // IMPORT // IMPORT //  */
import { st } from "./state.js";
import { rndrGlo } from "./render.js";

console.log("filter INIT"); a


/* QUERY  // QUERY // QUERY // QUERY //  */
const buttonsNavSec = document.querySelectorAll(".buttNavSect");
const resetB = document.querySelector(".clearFilter");


/* EVENTS // EVENTS // EVENTS // EVENTS //  */
buttonsNavSec.forEach((butt) => {
    butt.addEventListener("click", showCards, false);
});
resetB.addEventListener("click", clearFilter, false);


/* LOGIC  // LOGIC // LOGIC // LOGIC //  */
let s = st;
let activesB = s.cards.filter(c => c.active == true);
console.log("in filter by category(): ", activesB, s.cards); a

function showCards() {
    return s.cards.filter();
}

function clearFilter() {
    localStorage.clear();
    console.log(`reloading all cards: `);
    rndrGlo();
}


console.log("filter END");
/* RENDER  // RENDER // RENDER // RENDER //  */