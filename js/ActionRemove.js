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
    let crrnt = e.currentTarget;
    console.log("widget to Remove: ", crrnt);
}
