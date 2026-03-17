
;
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
        if (!inSt().length) {
            let ks = Object.keys(localStorage);
            console.log("ks: ", ks)
            st.cards = inLS().map(e => ({ id: e.id, active: e.active })).filter(e => e.id !== ks["state"]);
        }
        inSt();
    }

    //GET ITEMS STORED IN LOCALSTORAGE
    function inLS() {
        console.log("in localStorage");
        let items = Object.entries(localStorage).map(([id, status]) => ({ id, active: status }));
        console.log(items);
        return items
    }
    function inSt() {
        console.log("in st.cards");
        let items = st.cards;
        console.log(items);
        return items
    }

    function setItemLS() {
        let strnify = JSON.stringify(allIdCard.map(id => ({ id, active: st.cards.find(c => c.id === id).active || "false" })));
        localStorage.setItem("state", strnify);
    }

    function tggSwt(e) {
        let id = e.currentTarget.closest(".boxFigureContainer").getAttribute("id");
        let card = st.cards.find(c => c.id === id)
        card.active = !card.active;

        storeCardsSt(card);
        rndrGlo();
    }

    function storeCardsSt(ca) {
        console.log("in storeCardsSt()");
        localStorage.setItem(ca.id, ca.active)


        console.log(`card stored ${ca.id}.active: ${ca.active} `);
    }

    /* ***** RENDER ***** */
    function rndrGlo() {
        swTgglRndr();
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

    /* ***** output value function ***** */
    return { st }
}