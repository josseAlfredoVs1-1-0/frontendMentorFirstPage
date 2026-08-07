export function cardsStatus() {

    /* ***** QUERYS ***** */
    let allCards = [...document.querySelectorAll(".boxFigureContainer")];
    let allIdCard = allCards.map(c => c.getAttribute("id"))


    /* ***** STATUS ***** */
    let st = {
        cards: [],
        filter: "All",
        theme: "Dark",
    }

    /* ***** EVENTS ***** */
    window.addEventListener("load", loadStateCrs, false);

    const buttonsSwitch = document.querySelectorAll(".toggleAddWidgetSwitch");
    buttonsSwitch.forEach((butt) => {
        butt.addEventListener("click", tggSwt, false);
    });

    /* ***** LOGIC ***** */
    function loadStateCrs() {
        let svd = localStorage.getItem("state");
        console.log(svd);
        if (svd) {
            st.cards = JSON.parse(svd).map(c => ({ id: c.id, active: c.active }));
        } else {
            let strnify = JSON.stringify(allIdCard.map(id => ({ id, active: false })));
            localStorage.setItem("state", strnify);

            st.cards = JSON.parse(strnify).map(e => {
                localStorage.setItem(e.id, e.active);
                swTgglRndr();
            });
        }
        rdrCrds();
    }

    function tggSwt(e) {
        console.log("", e.currentTarget)
        let id = e.currentTarget.closest(".boxFigureContainer").getAttribute("id");
        console.log("id:::", id)
        let card = st.cards.find(c => c.id === id)
        card.active = !card.active;
        let va = { id, active: card.active }

        rdrCrds(id);
        storeCardsSt(va);
        swTgglRndr();
    }

    function storeCardsSt(va) {
        if (va) {
            let thsCr = st.cards.find(c => c.id === va.id);
            console.log("va:", thsCr, "typeof:", typeof thsCr);
            localStorage.setItem(thsCr.id, thsCr.active)
        }
        rdrCrds();
        console.log(`in chargeState()`);
    }

    /* ***** RENDER ***** */
    function swTgglRndr() {
        st.cards.forEach((card) => {
            let sw = document.getElementById(card.id).querySelector(".toggleAddWidgetSwitch");
            let sldr = sw.querySelector("div");

            if (card.active) {
                sw.classList.add("activeStylesWidget")
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
    return { st }
}