import { st } from './state.js'

export function cardsStatus() {

    /* ***** QUERYS ***** */
    let allCards = [...document.querySelectorAll(".boxFigureContainer")];
    let allIdCard = allCards.map(c => c.getAttribute("id"))

    /* ***** EVENTS ***** */
    window.addEventListener("load", loadStateCrs, false);

    const buttonsSwitch = document.querySelectorAll(".toggleAddWidgetSwitch");
    buttonsSwitch.forEach((butt) => {
        butt.addEventListener("click", tggSwt, false);
    });

    /* ***** LOGIC ***** */
    function loadStateCrs() {
        let svd = localStorage.getItem("state");
        console.log("svd:", svd);
        if (!svd) {
            let strnify = JSON.stringify(allCards.map(card => ({ id: card.getAttribute("id"), active: false })));
            localStorage.setItem("state", strnify);
        }

        setState();
        rdrCrds();
        swTgglRndr();
    }

    function setState() {
        console.log("st: before", st);
        st.cards = JSON.parse(localStorage.getItem("state")).map(c => ({ id: c.id, active: c.active }));
        console.log("st: after", st);
    }

    function tggSwt(e) {
        console.log(st.cards)
        console.log("currentButton:", e.currentTarget)
        let id = e.currentTarget.closest(".boxFigureContainer").getAttribute("id");
        console.log("id:::", id)
        let card = st.cards.find(c => c.id === id)
        card.active = !card.active;
        console.log("st thiscard:", card)

        rdrCrds(id);
        storeCardsSt();
        swTgglRndr();
    }

    function storeCardsSt(va) {
        localStorage.setItem("state", JSON.stringify(st.cards))

        console.log(`in chargeState()`);
        rdrCrds();
    }

    /* ***** RENDER ***** */
    function swTgglRndr() {
        st.cards.forEach((card) => {
            let sw = document.getElementById(card.id).querySelector(".toggleAddWidgetSwitch");
            let sldr = sw.querySelector("div");

            if (card.active) {
                sw.classList.add("activeStylesWidget", "activeMoveSlider")
                sldr.classList.add("activeMoveSlider")
            } else {
                sw.classList.remove("activeStylesWidget");
                sldr.classList.remove("activeMoveSlider");
            }
        });
    }

    function rdrCrds(id) {
        console.log(`cards stored in localStorage - in fn rdrCrds():`);
        if (id) {
            let crdSe = st.cards.find(c => c.id === id);
            console.log(`c: ${crdSe.id}`);
        } else {
            st.cards.forEach((e) => {
                console.log(`id: ${e.id}-active:${e.active}`);
            });
        }
    }

    /* ***** output value function ***** */
}