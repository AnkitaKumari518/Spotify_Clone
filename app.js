// let firstName = prompt("enter your name");
// let msg = "Welcome!" + " " + firstName;
// alert(msg);

let playMusic = document.querySelector(".playmisuc");
let first = document.querySelector(".first");
let card2 = document.querySelectorAll(".card")
let img = document.querySelector(".17");

function play(playMusic) {
    playMusic.paused = true;
    playMusic.addEventListener("click",  () => {
        playMusic.paused = false;
        playMusic = img;
        
    })
}    

