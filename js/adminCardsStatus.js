import { darkAll } from './applyDarkInitial.js';
import { cardsStatus } from './toggleCardsSwtch.js';
import {extract} from './infoJSON.js';
import { initRemoveMod } from './ActionRemove.js'
import { initFiltFeature } from './filterByCategory.js';

if (typeof document !== "undefined" &&
    typeof window !== "undefined") {
    document.addEventListener("DOMContentLoaded", function () {

        initFiltFeature();
        darkAll();
        cardsStatus();
        extract();
        initRemoveMod();
    });
};
 