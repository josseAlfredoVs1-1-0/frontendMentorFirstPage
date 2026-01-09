import { getItemsLS } from "./getItems.js";

//Remove button widget card
const buttonsRemoveWidgetCard = document.querySelectorAll(".removeButtWidget");

buttonsRemoveWidgetCard.forEach((butt) => {
    butt.addEventListener("click", actionRemoveWidgetActive, false);
});

// remove widget active function BEGIN || button (remove) widget card
function actionRemoveWidgetActive(e) {
    let curr = e.currentTarget;
    console.log(`elemet targeted: ${curr.closest(".boxFigureContainer").querySelector("h4").innerText} - id: ${curr.closest(".boxFigureContainer").getAttribute("id")}`);
    const active = curr.classList.contains("activeRemoveWidgetButt");
    const boxClosst = curr.closest(".boxFigureContainer");
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
    applyInRealTime(boxClosst);
}
// remove widget active function END

//apply styles from local Storage to begin web page
export function applyStyles() {
    getItemsLS();
    //reload new styles before remove
}

function applyInRealTime(el) {
    let swtch = el.querySelector(".toggleAddWidgetSwitch");
    let icon = el.querySelector(".toggleAddWidgetSwitch i");
    el.style.border = "2px solid coral";

    if (icon.classList.contains("activeMoveSlider")) {
        icon.classList.remove("activeMoveSlider");
    }

    if (swtch.classList.contains("activeStylesWidget")) {
        swtch.classList.remove("activeStylesWidget");
    }
}