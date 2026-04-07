import { st } from "./state.js";

console.log("in render.js FILE");

export function rndrGlo() {
    swTgglRndr();
    console.log(`in rndrGlo()`);
}

export function swTgglRndr() {
    console.log(`in swTgglRndr(): `);
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