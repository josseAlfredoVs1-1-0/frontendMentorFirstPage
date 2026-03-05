
;
export function cardsStatus() {

    /* ***** QUERYS ***** */
    let allCards = [...document.querySelectorAll(".boxFigureContainer")].map(c => c.getAttribute("id"));


    /* ***** STATUS ***** */
    let st = {
        cards: allCards.map((id) => ({ id, active: false })),
        filter: "All",
        theme: "Dark",
    }

    console.log(st.cards);

    /* ***** EVENTS ***** */
    const buttonsSwitch = document.querySelectorAll(".toggleAddWidgetSwitch");
    buttonsSwitch.forEach((butt) => {
        butt.addEventListener("click", tggSwt, false);
    });


    /* ***** LOGIC ***** */
    function tggSwt(e) {
        let id = e.currentTarget.closest(".boxFigureContainer").getAttribute("id");
        let card = st.cards.find(c => c.id === id)
        card.active = !card.active;
        swTgglRndr();
    }


    /* ***** RENDER ***** */
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

    return{ st }
}