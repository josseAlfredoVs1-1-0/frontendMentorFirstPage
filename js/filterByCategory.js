//variables for toggle switch active | All - Active | Inactive
const buttonsNavSec = document.querySelectorAll(".buttNavSect");
const allCards = document.querySelectorAll(".boxFigureContainer");

const resetB = document.querySelector(".clearFilter");
resetB.addEventListener("click", clearFilter, false);

//************** add event listeners BEGIN **************
buttonsNavSec.forEach((butt) => {
    butt.addEventListener("click", toggleActiveNavButton, false);
});

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

export function refresh(ee) {
    console.log(`objectRefresh: ${ee.target}`);
}