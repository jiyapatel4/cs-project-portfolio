const txt = document.querySelector(".name");
var nameArray = ["JIYA PATEL"];
var speed = 200;
var pos = 0;

typer = () => {
    document.querySelector("#name").
    innerHTML = nameArray[0].substring(0, pos) + "<span>\u25ae</span>";
    if(pos++ != nameArray[0].length)
        setTimeout(typer, speed);

}
window.addEventListener("load", typer);

