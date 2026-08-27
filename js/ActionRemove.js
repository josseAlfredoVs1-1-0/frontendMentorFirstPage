export function initActionRem() {
    console.log("initialized")
    //Remove button widget card
    const buttonsRemoveWidgetCard = document.querySelectorAll(".removeButtWidget");
    console.log("buttRem:", buttonsRemoveWidgetCard)

    buttonsRemoveWidgetCard.forEach((butt) => {
        butt.addEventListener("click", actionRemoveWidgetActive, false);
    });
}


// remove widget active function BEGIN || button (remove) widget card
function actionRemoveWidgetActive(e) {
    let curr = e.currentTarget;
    const boxClosst = curr.closest(".boxFigureContainer");
    let id = boxClosst.getAttribute("id");
    let tt = boxClosst.querySelector("h1").innerText;
    const active = curr.classList.contains("activeRemoveWidgetButt");
    console.log(`elemet targeted: ${tt} - id: ${id}`);


    const inLStor = localStorage.getItem(curr.closest(".boxFigureContainer").getAttribute("id")) == "active" ?
        true
        : false;

    console.log(`removeClicked - activeSwitch? : ${active}`);
    if (!active && inLStor) {
        //so remove widget card of active mode in local storage
        localStorage.setItem(boxClosst.getAttribute("id"), "inactive");
        curr.classList.add("activeRemoveWidgetButt");
        setTimeout(() => {
            curr.classList.remove("activeRemoveWidgetButt");
        }, 500);
    }
}
// remove widget active function END