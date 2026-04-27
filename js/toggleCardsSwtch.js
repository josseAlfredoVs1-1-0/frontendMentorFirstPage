/* IMPORT // IMPORT // IMPORT // IMPORT  */
import { st } from './state.js'
import { rndrGlo } from './render.js';

export function cardsStatus() {
    /* ***** QUERYS ***** */
    let allCards = [...document.querySelectorAll(".boxFigureContainer")];
    let allIdCard = allCards.map(c => c.getAttribute("id"))
    const buttonsSwitch = document.querySelectorAll(".toggleAddWidgetSwitch");

    /* ***** EVENTS ***** */
    buttonsSwitch.forEach((butt) => {
        butt.addEventListener("click", tggSwt, false);
    });

    window.addEventListener("load", loadStateCrs, false);

    /* ***** LOGIC ***** */
    function loadStateCrs() {
        let ksLS = Object.keys(localStorage);
        //frst init all cards
        if (ksLS.length == 0) {
            st.cards = allIdCard.map(e => ({ id: e, active: false }));
            st.cards.forEach((c) => save(c));
        }

        if (ksLS.length != 0) {
            st.cards = allIdCard.map((id) => {
                let k = JSON.parse(localStorage.getItem(id));
                if (localStorage.hasOwnProperty(id)) {
                    return ({ id: id, active: k });
                } else {
                    return ({ id: id, active: false });
                }
            });
        }

        rndrGlo();
    }
}

export function tggSwt(e) {
    let id = e.target.closest(".boxFigureContainer").getAttribute("id");
    let card = st.cards.find(c => c.id === id);
    card.active = !card.active;
    save(card);
    rndrGlo();
}

function save(c) {
    localStorage.setItem(c.id, c.active);
}