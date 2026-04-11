/* IMPORT // IMPORT // IMPORT // IMPORT //  */
import { st } from "./state.js";
import { rndrGlo } from "./render.js";

console.log("filter INIT");


/* QUERY  // QUERY // QUERY // QUERY //  */
const buttonsNavSec = document.querySelectorAll(".buttNavSect");
const resetB = document.querySelector(".clearFilter");


/* EVENTS // EVENTS // EVENTS // EVENTS //  */
buttonsNavSec.forEach((butt) => {
    butt.addEventListener("click", selectFilt, false);
});
resetB.addEventListener("click", clearFilter, false);


/* LOGIC  // LOGIC // LOGIC // LOGIC //  */
let s = st;

function selectFilt(e) {
    s.filter = e.currentTarget.textContent;
    console.log("filter: ", s.filter);


    switch (s.filter) {
        case "All":
            all();
            break;

        case "Active":
            active();
            break;

        case "Inactive":
            inactive();
            break;
    }
}



/* RENDER //  RENDER //  RENDER //  RENDER // */
function all() {
    console.log("show all:");
    s.cards.forEach(e => e.style.display = "visible");
}

function active() {
    console.log("show active:");

    let actIDs = s.cards.filter(c => c.active == true).map(ob => document.querySelector(`#${ob.id}`));

    actIDs.forEach(e => e.style.display = "visible");
    console.log(actIDs);
}

function inactive() {
    console.log("show inactive:");

    let inacIDs = s.cards.filter(c => c.active !== true).map(ob => document.querySelector(`#${ob.id}`))

    inacIDs.forEach(e => e.style.display = "visible");
    console.log(inacIDs);
}

function clearFilter() {
    localStorage.clear();
    console.log(`reloading all cards: `);
    rndrGlo();
}
