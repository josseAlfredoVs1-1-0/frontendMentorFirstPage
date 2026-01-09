export function getItemsLS() {
    console.log("get items initialization");
    Object.entries(localStorage).forEach(([key, value]) => {
        let currCard = document.getElementById(key);
        console.log(`currCard: ${currCard.closest(".boxFigureContainer")} - value: ${value}`);
        if (currCard) {
            if (value != "active") {
                currCard.querySelector(".toggleAddWidgetSwitch").classList.remove("activeStylesWidget");
                currCard.querySelector(".toggleAddWidgetSwitch i").classList.remove("activeMoveSlider");
                currCard.style.border = "2px solid mediumslateblue";
            } else {
                currCard.querySelector(".toggleAddWidgetSwitch").classList.add("activeStylesWidget");
                currCard.querySelector(".toggleAddWidgetSwitch i").classList.add("activeMoveSlider");
                currCard.style.border = "2px solid mediumspringgreen";
            }
        }
    });
}