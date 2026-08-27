import {genC} from './renderCardsSwtch.js';
import { darkAll } from './applyDarkInitial.js';
import { cardsStatus } from './toggleCardsSwtch.js';
import { initActionRem } from './ActionRemove.js';
import './filterByCategory.js';

if (typeof document !== "undefined" &&
    typeof window !== "undefined") {
    document.addEventListener("DOMContentLoaded", function () {

        genC();
        darkAll();
        cardsStatus();
        initActionRem();
    });
}
 