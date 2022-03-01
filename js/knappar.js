
function focus(recept){
    recept.classList.toggle("focus")
    
}
//workaround 
function bonrorafunk(){
    focus(bonrora)
}
let bonrora = document.querySelector("#bönröra")
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

