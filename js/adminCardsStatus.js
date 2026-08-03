import { darkAll } from './applyDarkInitial.js';
import './filterByCategory.js';
import { cardsStatus } from './toggleCardsSwtch.js';
import {genC} from './renderCardsSwtch.js';

if (typeof document !== "undefined" &&
    typeof window !== "undefined") {
    document.addEventListener("DOMContentLoaded", function () {

        genC();
        darkAll();
        cardsStatus();
        //chargeState();
    });
};
 