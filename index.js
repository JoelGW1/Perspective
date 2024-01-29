const lifeExpectancy = 80;

function showCard(number) {
    document.getElementById(number).style.opacity = "1";
}

function hideCard(number) {
    document.getElementById(number).style.display = "none";
}

for (let i = 0; i < lifeExpectancy * 52; i++){
    document.getElementById("sky").insertAdjacentHTML("afterbegin",`<div class="star"></div>`);
}

let star = document.getElementsByClassName("star");

function getRandomPosition(min,max) {
    return Math.random() * (max-min) + min;
}

for (let i=0;i< star.length; i++) {
    star[i].style.top = "49.5%";
    star[i].style.left = "49.5%"; 
    if (i < 0.5*star.length) {
        star[i].style.width = "1px";
        star[i].style.height = "1px";
        star[i].style.opacity = "0.5";
        star[i].style.transition = "transform 0.6s ease-in-out";
    } else if (i < 0.9*star.length){
        star[i].style.width = "2px";
        star[i].style.height = "2px";
        star[i].style.opacity = "0.6";
        star[i].style.transition = "transform 1.0s ease-in-out";
    } else if (i < 0.97*star.length){
        star[i].style.width = "3px";
        star[i].style.height = "3px";
        star[i].style.opacity = "0.7";
        star[i].style.transition = "transform 1.3s ease-in-out";
    } else {
        star[i].style.width = "4px";
        star[i].style.height = "4px";
        star[i].style.opacity = "1";
        star[i].style.transition = "transform 1.7s ease-in-out";
    }
    setTimeout(function() {star[i].style.transform = `translate(${getRandomPosition(-window.innerWidth/2,window.innerWidth/2)}px,${getRandomPosition(-window.innerHeight/2,window.innerHeight/2)}px)`},1);
}

function drawCircle() {
    let weeks = Number(document.getElementById("input").value) * 52;
    for (let i = 0;i < star.length; i++) {
        if (i < weeks) {
            star[i].style.width = "3px";
            star[i].style.height = "3px";
            star[i].style.transition = "opacity 0.6s ease-in";
            star[i].style.opacity = "0";
        } else {
            let n = i - weeks + 1;
            star[i].style.width = "5px";
            star[i].style.height = "5px";
            star[i].style.opacity = "0.4";
            star[i].style.transition = "transform 1s ease-in-out";
            star[i].style.transform = `translate(${5*Math.sqrt(n)*Math.cos(n/2)}px,${5*Math.sqrt(n)*Math.sin(n/2)}px)`;
        }
    }
}

function drawLive() {
    let weeks = Number(document.getElementById("input").value) * 52;
    for (let i=weeks;i< star.length; i++) {
        star[i].style.background = "white";
        if (i < 0.5*star.length) {
            star[i].style.width = "1px";
            star[i].style.height = "1px";
            star[i].style.opacity = "0.5";
            star[i].style.transition = "transform 0.6s ease-in-out";
        } else if (i < 0.9*star.length){
            star[i].style.width = "2px";
            star[i].style.height = "2px";
            star[i].style.opacity = "0.6";
            star[i].style.transition = "transform 1.0s ease-in-out";
        } else if (i < 0.97*star.length){
            star[i].style.width = "3px";
            star[i].style.height = "3px";
            star[i].style.opacity = "0.7";
            star[i].style.transition = "transform 1.3s ease-in-out";
        } else {
            star[i].style.width = "4px";
            star[i].style.height = "4px";
            star[i].style.opacity = "1";
            star[i].style.transition = "transform 1.7s ease-in-out";
        }
        setTimeout(function() {star[i].style.transform = `translate(${getRandomPosition(-window.innerWidth/2,window.innerWidth/2)}px,${getRandomPosition(-window.innerHeight/2,window.innerHeight/2)}px)`},1);
    }
}

function color() {
    let weeks = Number(document.getElementById("input").value) * 52;
    for (let i=weeks;i< star.length; i++) {
        star[i].style.transition = "background 1s ease-in-out";
        star[i].style.opacity = "0.6";
        if (i < weeks+(0.3*(star.length-weeks))) {
            star[i].style.background = "mediumseagreen";
        }
        else if (i < weeks+(0.6*(star.length-weeks))) {
            star[i].style.background = "orange";
        }
        else if (i < weeks+(0.8*(star.length-weeks))) {
            star[i].style.background = "slateblue";
        }
        else if (i < weeks+(1*(star.length-weeks))) {
            star[i].style.background = "tomato";
        }
    }
}
