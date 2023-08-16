

let cards = [...document.getElementsByClassName("card")];
let container = document.querySelector(".container");
let numbers = [...document.querySelectorAll(".number img")];
let count = [];
let hint = document.querySelector("#hint");
let restart = document.getElementById("restart");
let hintCounter = 2; 

function showCard() {
    this.classList.add("show");
    count.push(this);

    if (count.length === 2) {
        compare();

    }

}


function start() {
   
    counter();

    let shuffleCards = shuffle(cards);
    container.innerHTML = "";
    for (const card of shuffleCards) {
        container.innerHTML += card.outerHTML;
    } 

    cards=document.querySelectorAll(".card");
    for (const card of cards) {
        card.addEventListener("click", showCard);
    }

    for (const card of cards) {
        card.classList.add("show");
    }

    setTimeout(hide, 4000); 
   
}



function hide() {
    for (const card of cards) {
        card.classList.remove("show");
    }
}

function compare() {

    if (count[0].innerHTML === count[1].innerHTML) {
        matched();
        count = [];
    }
    else {
        unmatched();
        setTimeout(function () { unmatchedCard() }, 1000);
    }
}


function matched() {
    count[0].classList.add("matched");
    count[1].classList.add("matched");

}

function unmatched() {
    debugger
    count[0].classList.add("unmatched");
    count[1].classList.add("unmatched");
    freezeAll();



}


function freezeAll() {
    for (const card of cards) {
        card.classList.add("freeze");
    }
}

function unfreezeAll() {
    for (const card of cards) {
        card.classList.remove("freeze");
    }
}


function unmatchedCard() {
    debugger
    count[0].classList.remove("show", "unmatched");
    count[1].classList.remove("show", "unmatched");
    unfreezeAll();
    count = [];
}

function counter(){
    freezeAll();
    numbers[0].style.animation= "count 1s";
    numbers[1].style.animation= "count 1s 1s";
    numbers[2].style.animation= "count 1s 2s";
    unfreezeAll();
}


function help(){
    if(hintCounter==0){
        document.querySelector("#hint span").textContent = none;
    }

    hintCounter--;
    document.querySelector("#hint span").textContent = hintCounter;
    
    for (const card of cards) {
        card.classList.add("show");
    }

    setTimeout(hide, 1500); 
}



// events
window.addEventListener("load", start);

hint.addEventListener("click", help);

restart.addEventListener("click" , function(){
    window.location.reload(true);
})





