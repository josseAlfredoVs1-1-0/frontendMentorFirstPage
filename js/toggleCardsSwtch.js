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
        console.log("ks of localStorage:", ksLS);
        //frst init all cards
        if (ksLS.length < 1) {
            st.cards = allIdCard.map(e => ({ id: e, active: false }));
        }
        if (ksLS.length > 1) {
            st.cards = ksLS.map(e => ({ id: e, active: JSON.parse(localStorage.getItem(e)) }));
            //No exist CREATE DEFAULT "st"
        }
        rndrGlo();
        console.log("rndr loaded form state loaded:")
    }


    function tggSwt(e) {
        let id = e.currentTarget.closest(".boxFigureContainer").getAttribute("id") || null;
        let card = st.cards.find(c => c.id === id) || {};
        card.active = !card.active;

        save(card);
        rndrGlo();
    }

    function save(c) {
        localStorage.setItem(c.id, c.active);
    }

    /*  RENDER //  RENDER //  RENDER //  RENDER // RENDER //  */

}