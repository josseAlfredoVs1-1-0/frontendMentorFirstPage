import { st } from "./state.js"
import { tggSwt } from './toggleCardsSwtch.js'

/* INIT ESPECS //  INIT ESPECS //  INIT ESPECS // */
export function initRemoveMod() {
    /* QUERYS //  QUERYS //  QUERYS //  QUERYS //  */
    const buttonsRemoveWidgetCard = document.querySelectorAll(".removeButtWidget");


    /* EVENTS //  EVENTS //  EVENTS //  EVENTS // */
    buttonsRemoveWidgetCard.forEach((butt) => {
        butt.addEventListener("click", removWidg, false);
    });
}


/* LOGIC //  LOGIC //  LOGIC //  LOGIC // */
function removWidg(e) {
    let thsCrdID = e.target.closest(".boxFigureContainer").getAttribute("id");
    console.log("card to remove (id): ", thsCrdID);
    if (st.cards.find(c => c.id === thsCrdID).active) {
        tggSwt(e);
        console.log("disabled")
    }
}
