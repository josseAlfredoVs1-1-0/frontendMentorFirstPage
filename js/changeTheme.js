//change theme navbar button toggle light / dark theme
document.querySelector(".toggleTheme").addEventListener("click", changeTheme, false);
//************** add event listeners END **************

export var confg = {
    body: document.querySelector("#bodyTagMain"),
    toggleThemeButton: document.querySelector(".toggleTheme"),
    boxFigureContainer: document.querySelectorAll(".boxFigureContainer"),
    svgThemeChange: document.querySelector(".toggleTheme"),
}

//toggle theme Light / Dark function BEGIN 
function changeTheme(e) {

    var currTheme = confg.body.classList;

    if (!currTheme.contains("darkThem")) {
        Object.entries(confg).forEach(([_, val]) => {
            if (val) {
                if (val instanceof NodeList) {
                    val.forEach((node) => {
                        node.classList.remove("lightThem");
                        node.classList.add("darkThem");
                    });
                } else {
                    val.classList.remove("lightThem");
                    val.classList.add("darkThem");
                    //e.classList.add("darkThem");
                }
            } else {
                console.log("val undefined or null");
            }
        });
        //console.log(`Body classList aPthefter dark theme: ${confg.body.classList}`);
    } else {
        Object.entries(confg).forEach(([_, val]) => {
            if (val) {
                if (val instanceof NodeList) {
                    val.forEach((node) => {
                        node.classList.remove("darkThem");
                        node.classList.add("lightThem");
                    });
                } else {
                    val.classList.remove("darkThem");
                    val.classList.add("lightThem");
                    //e.classList.add("lightThem");
                }
            } else {
                console.log("val undefined or null");
            }
        });
        //console.log(`Body classList after dark theme: ${confg.body.classList}`);
    }
    console.log(`new theme (classList): ${currTheme}`);
    changeIconTheme(e);
}
//toggle theme Light / Dark function END

//change icon theme function BEGIN
function changeIconTheme(e) {
    let curr = e.currentTarget;
    console.log("target element: ", curr.getAttribute("class"));
    console.log(`curr value :${curr.getAttribute("class")}`);
    let sun = document.querySelector(".sunIcon");
    let moon = document.querySelector(".moonIcon");
    if (!curr.classList.contains("darkThem")) {
        sun.style.display = "none";
        moon.style.display = "block";
    } else {
        sun.style.display = "block";
        moon.style.display = "none";
    }
}
//change icon theme function END