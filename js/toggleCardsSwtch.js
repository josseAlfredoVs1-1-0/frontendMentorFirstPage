/* IMPORT // IMPORT // IMPORT // IMPORT  */
import { st } from './state.js'

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
        //Exist in localStorage USE to "st"
        if (ksLS.length > 1) {
            st.cards = ksLS.map(e => ({ id: e, active: JSON.parse(localStorage.getItem(e)) }));
            //No exist CREATE DEFAULT "st"
        } else {
            st.cards = allIdCard.map(e => ({ id: e, active: false }));
        }
        rndrGlo();
    }


    function tggSwt(e) {
        let id = e.currentTarget.closest(".boxFigureContainer").getAttribute("id");
        let card = st.cards.find(c => c.id === id);
        card.active = !card.active;

        save(card);
        rndrGlo();
    }

    function save(c) {
        localStorage.setItem(c.id, c.active);
    }

    /*  RENDER //  RENDER //  RENDER //  RENDER // RENDER //  */
    function rndrGlo() {
        swTgglRndr();
        console.log(`in rndrGlo()`);
    }

    function swTgglRndr() {
        st.cards.forEach((card) => {
            let sw = document.getElementById(card.id).querySelector(".toggleAddWidgetSwitch");
            let sldr = sw.querySelector("i");

            if (card.active) {
                sw.classList.add("activeStylesWidget")
                sldr.classList.add("activeMoveSlider")
            } else {
                sw.classList.remove("activeStylesWidget");
                sldr.classList.remove("activeMoveSlider");
            }
        });
    }
}