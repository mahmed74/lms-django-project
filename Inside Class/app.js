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


const mainstream = document.querySelector("#mainstreamid");
const classmembers = document.querySelector("#classmemberid")
const announcementsection = document.querySelector(".announcementsection")
const membersection = document.querySelector(".memberssection")


mainstream.addEventListener("click", () => {
    classmembers.classList.remove("selectedSectionborder");
    mainstream.classList.add("selectedSectionborder");
    membersection.classList.add("switchdisplaynone");
    announcementsection.classList.remove("switchdisplaynone");

});


classmembers.addEventListener("click", () => {
    mainstream.classList.remove("selectedSectionborder");
    classmembers.classList.add("selectedSectionborder");
    membersection.classList.remove("switchdisplaynone");
    announcementsection.classList.add("switchdisplaynone")

    console.log("classmember")

})