/* IMPORT // IMPORT // IMPORT // IMPORT //  */
import { st } from "./state.js";
import { rndrGlo } from "./render.js";
import { renderCardsFil } from "./render.js";

/* QUERY  // QUERY // QUERY // QUERY //  */
export let allCards = [...document.querySelectorAll(".boxFigureContainer")]
let allCardsID = allCards.map(e => e.getAttribute("id"));
const buttonsNavSec = document.querySelectorAll(".buttNavSect");

export function initFiltFeature() {
    const resetB = document.querySelector(".clearFilter");

    /* EVENTS // EVENTS // EVENTS // EVENTS //  */
    buttonsNavSec.forEach((butt) => {
        butt.addEventListener("click", selectFilt, false);
    });
    resetB.addEventListener("click", clearFilter, false);
}


/* LOGIC  // LOGIC // LOGIC // LOGIC //  */

function selectFilt(e) {
    st.filter = e.currentTarget.textContent;
    let f = st.filter;
    console.log("filter: ", f);


    switch (f) {
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
    renderStylesButt(e);
}

/* RENDER //  RENDER //  RENDER //  RENDER // */
function renderStylesButt(t) {
    /* LI container button DOM element */
    let butt = t.currentTarget;

    console.log(" DOM T: ", butt);

    if (st.filter !== "default") {
        buttonsNavSec.forEach(e => e.classList.remove("activeButtNavSect"))
        butt.classList.add("activeButtNavSect");
    } else {
        butt.classList.remove("activeButtNavSect");
    }
}

function all() {
    console.log("showing all... ");

    renderCardsFil(allCards);
}

function active() {
    console.log("show active:");

    let actIDs = st.cards.filter(c => c.active).map(ob => document.querySelector(`#${ob.id}`));

    renderCardsFil(actIDs);
}

function inactive() {
    console.log("show inactive:");

    let inacIDs = st.cards.filter(c => !c.active).map(ob => document.querySelector(`#${ob.id}`))

    renderCardsFil(inacIDs);
}

function clearFilter() {
    console.log(`reloading all cards: `);
    localStorage.clear();
    st.cards.forEach((c) => {
        if (c.active) {
            c.active = !c.active;
        }
    });
    rndrGlo();
}
