

let back = document.querySelector(".back")
back.addEventListener("click",goback)
function goback(){
    let focused = document.querySelector(".focus")
    focused.classList.remove("focus")
    back.classList.toggle("focus")
}
function focus(recept){
    recept.classList.add("focus")
    back.classList.add("focus")
}
//workaround 
function bonrorafunk(){
    focus(bonrora)
}
let bonrora = document.querySelector("#bonrora")
bonrora.addEventListener("click",bonrorafunk)

function bonburgarefunk(){
    focus(bonburgare)
}
let bonburgare = document.querySelector("#bonburgare")
bonburgare.addEventListener("click",bonburgarefunk)

function bonsalladfunk(){
    focus(bonsallad)
}
let bonsallad = document.querySelector("#bönsallad")
bonsallad.addEventListener("click",bonsalladfunk)

function bonbrodfunk(){
    focus(bonbrod)
}
let bonbrod = document.querySelector("#bönbröd")
bonbrod.addEventListener("click",bonbrodfunk)

