let stars = document.getElementById("stars");
let s1 = document.getElementsByClassName("s1");
let s2 = document.getElementsByClassName("s2");
let s3 = document.getElementsByClassName("s3");
let s4 = document.getElementsByClassName("s4");
let lifeSpan = 80;
let age = document.getElementById("age").value = 0;


function drawSky(years) {
    {

        for (let i = 0; i < ((years*0.5)*52); i++) {
            stars.insertAdjacentHTML("afterbegin","<div class='s1'> </div>");
        }
        
        for (let i = 0; i < s1.length; i++) {
            drawStar(s1, i, 0);
        }
        }
        
        {
        for (let i = 0; i < ((years*0.4)*52); i++) {
            stars.insertAdjacentHTML("afterbegin","<div class='s2'> </div>");
        }
        
        for (let i = 0; i < s2.length; i++) {
            drawStar(s2, i, 0);
        }
        }
        
        {
        for (let i = 0; i < ((years*0.05)*52); i++) {
            stars.insertAdjacentHTML("afterbegin","<div class='s3'> </div>");
        }
        
        for (let i = 0; i < s3.length; i++) {
            drawStar(s3, i, 0);
        }
        }
        
        {
        for (let i = 0; i < ((years*0.05)*52); i++) {
            stars.insertAdjacentHTML("afterbegin","<div class='s4'> </div>");
        }
        
        for (let i = 0; i < s4.length; i++) {
            drawStar(s4, i, 0);
        }
        }
        setTimeout(start,1);
}

function drawStar(type, i, opacityV) {
    let thisStar = type[i];
    randomTop = getRandomPosition(0, window.innerHeight -5);
    randomLeft = getRandomPosition(0, window.innerWidth -5);
    thisStar.style.top = randomTop+"px";
    thisStar.style.left = randomLeft+"px";
    thisStar.style.opacity = opacityV;
}

function getRandomPosition(min,max) {
    return Math.random() * (max-min) + min;
}
function play() {
    document.getElementById("two").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}
function start() {
    let age = document.getElementById("age").value;
    age = Number(age);
    if (age <= 80 && age >= 0){
        for (let i = 0; i < lifeSpan*0.5*52; i++) {
            s1[i].style.opacity = '0.6';
        }
        for (let i = 0; i < lifeSpan*0.4*52; i++) {
            s2[i].style.opacity = '0.7';
        }
        for (let i = 0; i < lifeSpan*0.05*52; i++) {
            s3[i].style.opacity = '0.8';
        }
        for (let i = 0; i < lifeSpan*0.05*52; i++) {
            s4[i].style.opacity = '1';
        }
        
        for (let i = 0; i < age*0.5*52; i++) {
            s1[i].style.opacity = '0';
        }
        for (let i = 0; i < age*0.4*52; i++) {
            s2[i].style.opacity = '0';
        }
        for (let i = 0; i < age*0.05*52; i++) {
            s3[i].style.opacity = '0';
        }
        for (let i = 0; i < age*0.05*52; i++) {
            s4[i].style.opacity = '0';
        }
        } else {
            alert("age >= 0 or age <= 80");
    }
}

function animate2() {
    if (isNaN(age) != false && age >=0 && age<=80){
    document.getElementById("one").innerHTML = ``;
    age = Number(document.getElementById("age").value);
    start();
    document.getElementById("two").innerHTML = `<h1>These are your remaining weeks</h1>`;
    setTimeout(function() {
    for (let i =0; i <= (lifeSpan-age);i++){
        setTimeout(function() {
        document.getElementById("two").innerHTML = `<h1 id="counter">${age} years</h1>`;
        console.log(age);
        for (let i = 0; i < age*0.5*52; i++) {
            s1[i].style.transition = "opacity 0.1s ease-in-out";
            s1[i].style.opacity = '0';
        }
        for (let i = 0; i < age*0.4*52; i++) {
            s2[i].style.transition = "opacity 0.1s ease-in-out";
            s2[i].style.opacity = '0';
        }
        for (let i = 0; i < age*0.05*52; i++) {
            s3[i].style.transition = "opacity 0.1s ease-in-out";
            s3[i].style.opacity = '0';
        }
        for (let i = 0; i < age*0.05*52; i++) {
            s4[i].style.transition = "opacity 0.1s ease-in-out";
            s4[i].style.opacity = '0';
        }
        if (age == 80) {setTimeout(function() {location.reload()},1500)}
        age++;
        }, i*200)};}, 2500);
    }
}

function toTop() {
    let container = document.getElementById("container");
    container.scrollTo(0, 0);
}
