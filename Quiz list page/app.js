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

let pendingquizswitch = document.querySelector(".pendingquizswitch")
let attemptedquizswitch = document.querySelector(".attemptedquizswitch")

let pendingquizsection = document.querySelector(".pendingquizsection")
let attemptedquizsection = document.querySelector(".attemptedquizsection")




pendingquizswitch.addEventListener("click",()=>{
    pendingquizsection.classList.remove("hiddenclass")
    attemptedquizsection.classList.add("hiddenclass")
    attemptedquizswitch.classList.remove("activequizlist")
    pendingquizswitch.classList.add("activequizlist")

})


attemptedquizswitch.addEventListener("click",()=>{
    attemptedquizsection.classList.remove("hiddenclass")
    pendingquizsection.classList.add("hiddenclass")
    pendingquizswitch.classList.remove("activequizlist")
    attemptedquizswitch.classList.add("activequizlist")

})


