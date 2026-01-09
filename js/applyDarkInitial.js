//set background dark theme BEGIN
export function darkAll() {
    Object.entries(confg).forEach(([key, prop]) => {
        if (prop instanceof NodeList) {
            prop.forEach((node) => {
                node.classList.add("darkThem");
                //console.log(`name: ${node.getAttribute("id")} & class: ${node.classList}`);
            });
        } else {
            prop.classList.add("darkThem");
            //console.log(`name: ${key} & class: ${prop.classList}`);
        }
    });
}
//set background dark theme END