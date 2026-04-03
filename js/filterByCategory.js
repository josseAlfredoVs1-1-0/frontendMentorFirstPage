/* IMPORT // IMPORT // IMPORT // IMPORT //  */
import { st } from "./state.js";



/* QUERY  // QUERY // QUERY // QUERY //  */
const buttonsNavSec = document.querySelectorAll(".buttNavSect");
const resetB = document.querySelector(".clearFilter");


/* EVENTS // EVENTS // EVENTS // EVENTS //  */
buttonsNavSec.forEach((butt) => {
    butt.addEventListener("click", toggleActiveNavButton, false);
});
resetB.addEventListener("click", clearFilter, false);


/* LOGIC  // LOGIC // LOGIC // LOGIC //  */
let state = st;
let activesB = state.cards.filter(c => c.active == true);
console.log("in filter by category(): ", activesB, state.cards);a


/* RENDER  // RENDER // RENDER // RENDER //  */


//Toogle button active nav section
function toggleActiveNavButton(e) {
    let currButtSwitch = e.target || e.currentTarget;
    let active = currButtSwitch.classList.contains("activeButtNavSect");
    let currName = currButtSwitch.innerText;
    console.log(`button clicked: ${currName} - active? : ${active}`);


    !active ?
        (() => {
            buttonsNavSec.forEach((butt) => {
                butt.classList.remove("activeButtNavSect")
            });
            currButtSwitch.classList.add("activeButtNavSect")
            console.log(`button enabled: ${currName} - classList: ${currButtSwitch.classList}`);
            showCountedCards(currName);
        })() :
        (() => {
            currButtSwitch.classList.remove("activeButtNavSect");
            console.log("button disabled, no action");
            showAll(allCards);
        })();
    // END operator ternary  ⬆️⬆️
};

function showCountedCards(filterKey, el) {
    console.log(`filter key: ${filterKey}`);

    switch (filterKey) {
        case "All":
            showAll(allCards);
            break;
        case "Active":
            showActive(allCards, "ON");
            break;
        case "Inactive":
            showInactive(allCards, "OFF");
            break;
    }
}

function showAll(cards) {
    console.log("show all cards");
    cards.forEach((card) => {
        card.style.display = "grid";
    });
}

function showActive(cards, status) {
    filtOpt = "FuACTIVE";
    console.log(`status: ${status}`);

    let ks = Object.keys(localStorage).filter((key) => localStorage.getItem(key) === "active");
    console.log(`ks value: ${ks}`);

    //hidden all cards first
    cards.forEach((card) => {
        card.style.display = "none";
    });

    //filter cards to show only active ones
    ks.forEach((key) => {
        // var "el" used to select element by id
        let el = document.getElementById(`${key}`);
        el.style.display = "grid";
    });
};


function showInactive(cards, status) {
    filtOpt = "FuINACTIVE";
    console.log(`status: ${status}`);

    let ks = Object.keys(localStorage).filter((key) => localStorage.getItem(key) === "inactive");
    console.log(`ks value: ${ks}`);

    //hidden all cards first
    cards.forEach((card) => {
        card.style.display = "none";
    });

    //filter cards to show only active ones
    ks.forEach((key) => {
        // var "el" used to select element by id
        let el = document.getElementById(`${key}`);
        el.style.display = "grid";
    });
};

function clearFilter() {
    localStorage.clear();
}

export function rmBox(boxSel) {
    let boxId = boxSel.getAttribute("Id");
    console.log(`obj:${boxSel} -- Id: ${boxId}`);
    if (filtOpt === "FuACTIVE" || filtOpt === "FuINACTIVE") {
        (() => {
            boxSel.style.display = "none";
        })()
    }
}