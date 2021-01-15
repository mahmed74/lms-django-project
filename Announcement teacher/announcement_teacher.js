function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";


}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}


const selectclass = document.querySelector("#selectclass");
const classeslistdiv = document.querySelector(".classeslist")
const selecticon = document.querySelector("#selecticon")

selectclass.addEventListener("click", () => {
    classeslistdiv.classList.toggle("hideclass");
    selecticon.classList.toggle("rotateclass")


});