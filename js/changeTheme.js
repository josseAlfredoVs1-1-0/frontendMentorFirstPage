
/*           IMPORTS // IMPORTS // IMPORTS // IMPORTS           */
import { st } from './state.js';



/*           QUERYS // QUERYS // QUERYS // QUERYS           */
let state = st;

let ButtChangeThe = document.querySelector(".toggleTheme");
let sun = document.querySelector(".sunIcon");
let moon = document.querySelector(".moonIcon");



/*           EVENTS // EVENTS // EVENTS // EVENTS           */
//change theme navbar button toggle light / dark theme
ButtChangeThe.addEventListener("click", toggleTHeme, false);



/*           CONFIG // CONFIG // CONFIG // CONFIG           */
export var confg = {
    body: document.querySelector("#bodyTagMain"),
    toggleThemeButton: document.querySelector(".toggleTheme"),
    boxFigureContainer: document.querySelectorAll(".boxFigureContainer"),
    svgThemeChange: document.querySelector(".toggleTheme"),
}


/*           LOGIC // LOGIC // LOGIC // LOGIC           */
function toggleTHeme() {
    state.theme = !state.theme;

    changeTheme();
    changeIconTheme();
}

/*           RENDER // RENDER // RENDER // RENDER           */
function changeTheme(e) {
    console.log(`currentTheme (DARK) "${state.theme}"? light : dark`);
    if (state.theme) {
        Object.entries(confg).forEach(([_, val]) => {
            if (val instanceof NodeList) {
                val.forEach((node) => {
                    node.classList.remove("darkThem");
                    node.classList.add("lightThem");
                });
            } else {
                val.classList.remove("darkThem");
                val.classList.add("lightThem");
            }
        });
    } else {
        Object.entries(confg).forEach(([_, val]) => {
            if (!val) {
                return;
            }
            if (val instanceof NodeList) {
                val.forEach((node) => {
                    node.classList.remove("lightThem");
                    node.classList.add("darkThem");
                });
            } else {
                val.classList.remove("lightThem");
                val.classList.add("darkThem");
            }
        });
    }
}

function changeIconTheme() {
    if (!state.theme) {
        sun.style.display = "none";
        moon.style.display = "block";
    } else {
        sun.style.display = "block";
        moon.style.display = "none";
    }
}