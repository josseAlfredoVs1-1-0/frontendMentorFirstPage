import { getItemsLS } from "./getItems.js";

export function handleDisplay() {
    let container = document.querySelector("#wrapperContainerAllPage");
    console.log(`container: ${container.getAttribute("Id")}`);
    let items = Object.entries(localStorage).forEach(([key,val])=>{
        let currCard = document.getElementById(key);
        let cardId = currCard.getAttribute("Id");
        console.log(`card ID:${cardId} -- active?${val}`)
    });
    console.log(`items: ${items}`);
}
