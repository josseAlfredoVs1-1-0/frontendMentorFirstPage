//set background dark theme BEGIN
export function darkAll() {
    console.log(`darkAll initialized succesfull`);
    Object.entries(confg).forEach(([_, prop]) => {
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