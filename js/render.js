import { st } from "./state.js";

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