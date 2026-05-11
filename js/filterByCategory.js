/* IMPORT // IMPORT // IMPORT // IMPORT //  */
import { st } from "./state.js";
import { rndrGlo } from "./render.js";
import { renderCardsFil } from "./render.js";

/* QUERY  // QUERY // QUERY // QUERY //  */
export let allCards = [...document.querySelectorAll(".boxFigureContainer")]
 let allCardsID = allCards.map(e => e.getAttribute("id"));

export function initFiltFeature() {
    const buttonsNavSec = document.querySelectorAll(".buttNavSect");
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
            all(f);
            break;

        case "Active":
            active(f);
            break;

        case "Inactive":
            inactive(f);
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
        butt.classList.add(".activeButtNavSect");
    } else {
        butt.classList.remove("activeButtNavSect");
    }
}

function all(info) {
    console.log("showing all... ");
    let allC = allCardsID.map((id) => document.querySelector(`#${id}`))

    /* CALL RENDER CARDS */
    renderCardsFil(allC);
}

function active() {
    console.log("show active:");

    let actIDs = st.cards.filter(c => c.active).map(ob => document.querySelector(`#${ob.id}`));

    /* CALL RENDER CARDS */
    renderCardsFil(actIDs);
}

function inactive() {
    console.log("show inactive:");

    let inacIDs = st.cards.filter(c => !c.active).map(ob => document.querySelector(`#${ob.id}`))

    /* CALL RENDER CARDS */
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
