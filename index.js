const ageEl = document.getElementById("age");
const lifeExpectancyEl = document.getElementById("lifeExpectancy");

function life() {
    const lifeExpectancy = Number(document.getElementById("lifeExpectancy").value) * 52;
    const age = Number(document.getElementById("age").value) * 52;;
    const weeks = document.getElementById("weeks");

    weeks.innerHTML = '';
    if (isNaN(lifeExpectancy) || isNaN(age)) {
        weeks.innerHTML = 'Your life expectancy and current age must be in years.';
    }else if (age > lifeExpectancy) {
        weeks.innerHTML = 'Your current age cannot exceed your life expectancy.';
    }else if ((lifeExpectancy <= 0) || (age < 0) || (age == lifeExpectancy)){
        weeks.innerHTML = 'You are dead.';
    }else if (lifeExpectancy/52 > 149){
        weeks.innerHTML = "Life expectancy can't be over 150 years yet.";
    }else {
        for (let i = 0; i < age; i++) {  //we start with 1 week by default
            weeks.insertAdjacentHTML('beforeEnd','<div id="weekF"></div>')
        }
    
        for (let i = 0; i < lifeExpectancy-age; i++) {  //we start with 1 week by default
            weeks.insertAdjacentHTML('beforeEnd','<div id="weekE"></div>')
        }
    }
}

lifeExpectancyEl.addEventListener("change", () => {
    life();
})

ageEl.addEventListener("change", () => {
    life();
})

life();