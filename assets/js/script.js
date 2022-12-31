const hamMenu = document.getElementById("menu");
const crossMenu = document.getElementById("crss");
const navMenu = document.getElementById("nav")

hamMenu.onclick = () => {
    operationOn();
};

crossMenu.onclick = () => {
    operationOFF()
}


function operationOn() {
    navMenu.style.display = "block";
    crossMenu.style.display = "block";
    hamMenu.style.display = "none";
}

function operationOFF() {
    navMenu.style.display = "none";
    crossMenu.style.display = "none";
    hamMenu.style.display = "block";
}