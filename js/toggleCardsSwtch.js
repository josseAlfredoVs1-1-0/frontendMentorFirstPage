
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
    const buttonsSwitch = document.querySelectorAll(".toggleAddWidgetSwitch");
    buttonsSwitch.forEach((butt) => {
        butt.addEventListener("click", tggSwt, false);
    });

    window.addEventListener("load", loadStateCrs, false);

    /* ***** LOGIC ***** */
    /* FUNCTION LOAD BEGIN  --  FUNCTION LOAD BEGIN */
    function loadStateCrs() {
        let ksLS = Object.keys(localStorage);
        //Exist in localStorage so USE asiggn to "st"
        console.log("length of ksLS: ", ksLS.length, "typeofOf box2: ", typeof JSON.parse(localStorage.getItem("box2")), "ksLS:", ksLS);
        if (ksLS.length > 1) {
            st.cards = ksLS.map(e => ({ id: e, active: JSON.parse(localStorage.getItem(e)) }));
            //No exist so CREATE DEFAULT "st"
        } else {
            st.cards = allIdCard.map(e => ({ id: e, active: false }));
        }
        console.log("loaded state: ", st.cards);
        console.log("in localStorage: ", "box2: ", JSON.parse(localStorage.getItem("box2")), localStorage);
        rndrGlo();
    }
    /* FUNCTION LOAD END  --  FUNCTION LOAD END */


    /* FUNCTION SAVE END  --  FUNCTION SAVE END */
    function save() {
        st.cards.forEach(c => localStorage.setItem(c.id, c.active));
    }
    /* FUNCTION SAVE END  --  FUNCTION SAVE END */


    function tggSwt(e) {
        console.log("in ST.cards: ", st.cards);
        let id = e.currentTarget.closest(".boxFigureContainer").getAttribute("id");
        let card = st.cards.find(c => c.id === id);
        card.active = !card.active;

        save();
        rndrGlo();
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