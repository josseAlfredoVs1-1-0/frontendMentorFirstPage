import { darkAll } from './applyDarkInitial.js';
import { applyStyles } from './ActionRemove.js';
import './filterByCategory.js';
import { refresh } from './filterByCategory.js';
import './changeTheme.js';
import { confg } from './changeTheme.js'

if (typeof document !== "undefined" &&
    typeof window !== "undefined") {
    document.addEventListener("DOMContentLoaded", function () {

        window.onload = applyStyles();
        window.onload = darkAll();

        //variables for toggle active in switch widget card 
        const buttonsSwitch = document.querySelectorAll(".toggleAddWidgetSwitch");

        buttonsSwitch.forEach((butt) => {
            //styles
            butt.addEventListener("click", widgetSwitchActive, false);
            //functionality
            butt.addEventListener("click", addRemoveWidgetCard, false);
        });

        //toggle active widget button begin
        function widgetSwitchActive(e) {
            let currButtSwitch = e.currentTarget;
            let currIcon = currButtSwitch.querySelector("i");
            let idCurrentTarget = currButtSwitch.closest(".boxFigureContainer").getAttribute("id")
            let active = localStorage.getItem(idCurrentTarget) === "active" ? true : false;

            if (!active) {
                currButtSwitch.classList.add("activeStylesWidget");
                currIcon.classList.add("activeMoveSlider");
                console.log(`class list: ${currIcon.classList} and ACTIVE NOW`);
            } else {
                currButtSwitch.classList.remove("activeStylesWidget");
                currIcon.classList.remove("activeMoveSlider");
                console.log(`class list: ${currIcon.classList} INACTIVE NOW`);
                let boxRem = currButtSwitch.closest(".boxFigure").getAttribute("Id");
                console.log(`curr butt widgetActiveFunction: ${boxRem}`);
            }
        }
        //toggle active widget button end


        //add widget local storage BEGIN
        function addRemoveWidgetCard(e) {
            let curr = e.currentTarget;

            //select full card || not only button
            let currCardContainer = curr.closest(".boxFigureContainer");
            let cardId = currCardContainer.getAttribute("id");

            if (curr.classList.contains("activeStylesWidget")) {
                localStorage.setItem(cardId, "active");
            } else {
                //overwrite to inactive
                localStorage.setItem(cardId, "inactive");
            }
            applyStyles();

        }
        //add widget local storage END
    });
};
