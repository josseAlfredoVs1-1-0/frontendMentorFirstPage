import { st } from "./state.js";
import { allCards } from "./filterByCategory.js";

export function rndrGlo() {
    swTgglRndr();
}

export function swTgglRndr() {
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

export function renderCardsFil(data) {
    console.log("data: ", data);
    let cardsRenID = data.map(e => e.getAttribute("id"))
    console.log("cardsIdS: ", cardsRenID)


    st.cards.forEach((c) => {
        if (cardsRenID.find(id => id === c.id)) {
            document.getElementById(c.id).style.display = "grid";
        } else {
            document.getElementById(c.id).style.display = "none"
        }
    });
}

