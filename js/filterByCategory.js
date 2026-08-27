import { st } from './state.js'

export function initEnv() {

    //variables for toggle switch active | All - Active | Inactive
    const buttonsNavSec = document.querySelectorAll(".buttNavSect");
    const allCards = document.querySelector("#box1");
    const resetB = document.querySelector(".clearFilter");
    console.log("cards__", allCards)


    resetB.addEventListener("click", clearFilter, false);
    resetB.addEventListener('animationend', function (e) { e.currentTarget.classList.remove("clearAnim") }, false)

    //************** add event listeners BEGIN **************
    buttonsNavSec.forEach((butt) => {
        butt.addEventListener("click", toggleActiveNavButton, false);
    });
}

//Toogle button active nav section
function toggleActiveNavButton(e) {
    const currButtSwitch = e.currentTarget;
    let currName = currButtSwitch.innerText;
    let c = st.filter.find(f => f.name == currName);

    st.filter.forEach((f) => {
        f.active = false
        if (f.name !== c.name) {
        }
        c.active = !c.active;
    })

    console.log("filter name:", c.name, "active: ", c.active)
    st.filter.forEach((e) => console.log("in filter() --- st.filter", e))

    rdrButtNav(currName, currButtSwitch);
    //if (c.active) { filterCards(currName) }
};

function rdrButtNav(b, t) {
    buttonsNavSec.forEach((butt) => {
        butt.classList.remove("activeButtNavSect")
    });

    if (st.filter.find((f) => f.name == b).active) {
        t.classList.add("activeButtNavSect")
        filterCards(b);
    }
}

function filterCards(filterKey, el) {
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
    console.log("show all cards --");
    st.cards.filter((c) => {
        console.log("card:", c, "cards:::", cards)
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

function clearFilter(e) {
    let cl = e.currentTarget;
    cl.classList.remove("clearAnim");
    void cl.offsetWidth;

    cl.classList.add("clearAnim")
    console.log("curr:", cl)
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