import { darkAll } from './applyDarkInitial.js';
import './filterByCategory.js';
import { cardsStatus } from './toggleCardsSwtch.js';


if (typeof document !== "undefined" &&
    typeof window !== "undefined") {
    document.addEventListener("DOMContentLoaded", function () {


        darkAll();
        cardsStatus();
        //chargeState();
    });
};
 