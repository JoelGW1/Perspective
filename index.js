const  tapBD = document.getElementById('tapBD');
const bd = document.getElementById('bd');
const  bdWindow = document.getElementById('bdWindow');
const  window2 = document.getElementById('window2');

window2.style.display = 'none';

let weeksLived;

function reset() {
    bd.value = 'yyyy-mm-dd';
}

function hide() {
    if (bd.value.length != 0) {
        let dateObj = new Date(bd.value);
        weeksLived = Math.trunc((new Date() - dateObj.getTime())/604800000);
        bdWindow.style.display = 'none';
        viewWeeks();
    }
}

function viewWeeks() {
    window2.style.display = 'flex';
    const squaresPast = document.getElementById('squaresPast');
    const squaresLive = document.getElementById('squaresLive');

    for (let i = 0; i < weeksLived; i++) {
        setTimeout(addPast,.6*i);
    }
    
    for (let i = 0; i < 4160 - weeksLived; i++) {
        setTimeout(addLive,.6*i);
    }
}

function addPast() {
    squaresPast.insertAdjacentHTML('beforeend',`<div class="darkSquare"></div>`);
}

function addLive() {
    squaresLive.insertAdjacentHTML('beforeend',`<div class="lightSquare"></div>`);
}
