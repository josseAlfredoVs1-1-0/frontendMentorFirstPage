import { darkAll } from './applyDarkInitial.js';
import './filterByCategory.js';
import { cardsStatus } from './toggleCardsSwtch.js';
import {extract} from './infoJSON.js';
import { initRemoveMod } from './ActionRemove.js'

if (typeof document !== "undefined" &&
    typeof window !== "undefined") {
    document.addEventListener("DOMContentLoaded", function () {


        darkAll();
        cardsStatus();
        extract();
        initRemoveMod();
    });
};
 